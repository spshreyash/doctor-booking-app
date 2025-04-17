const User = require("../model/user.js");
const Doctor = require("../model/Doctor.js");
const Booking = require("../model/Booking.js");
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIP_KEY);

async function getCheckoutSession(req, res) {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    const user = await User.findById(req.userId);

    console.log(doctor," this is fnalpage data docot")
    console.log(user,"this is final page data user")

    if (!doctor || !user) {
      return res.status(404).json({ msg: "Doctor or User not found" });
    }

    // ✅ Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.id,
      line_items: [
        {
          price_data: {
            currency: "inr", // ✅ Stripe uses ISO currency codes, "rs" is invalid
            unit_amount: doctor.ticketPrice * 100,
            product_data: {
              name: `Appointment with Dr. ${doctor.name}`,
              description: doctor.bio || "Doctor appointment",
              images: doctor.photo ? [doctor.photo] : [],
            },
          },
          quantity: 1,
        },
      ],
    });

    // ✅ Create new booking
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id, // Optional: You can store Stripe session ID if you want
    });

    await booking.save(); // ✅ Should be booking.save() instead of Booking.save()

    return res.status(200).json({ success: true, msg: "Successfully initiated payment", session });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, msg: "Error creating checkout session" });
  }
}


// controller/BookingController.js
async function getDoctorBookings(req, res) {
  try {
    const doctorId = req.userId; // This should be the logged-in doctor

    const bookings = await Booking.find({ doctor: doctorId })
      .populate("user", "name email photo") // only get selected user fields
      .sort({ createdAt: -1 });

    const formatted = bookings.map(booking => ({
      user: booking.user,
      gender: booking.user.gender || "NA",
      isPaid: booking.isPaid,
      price: booking.ticketPrice,
      bookedOn: booking.createdAt.toDateString(), // formatted date
    }));

    res.status(200).json({ success: true, data: formatted });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Failed to fetch bookings" });
  }
}


module.exports={
    getCheckoutSession,getDoctorBookings
}