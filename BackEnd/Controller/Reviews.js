const { create } = require("../model/Booking")
const Doctor = require("../model/Doctor")
const Review=require("../model/Reviews")

async function allReviews(req,res)
{
    try {
        const allReviews=await Review.find({}).populate("user","name photo")
        console.log(allReviews)
        

        return res.json({ success:true, msg:"revies found" , allReviews:allReviews})
    } catch (error) {
        console.log(error)
        return res.json({ success:false, msg:"revies not found"})
        
    }
}

async function createReviews(req,res)
{
    try {
    // if(!req.body.doctor) req.body.doctor  = req.params.id
    // if(!req.body.user) req.body.user  = req.params.id

    const doctorId = req.body.doctor || req.params.id;
    const userId = req.body.user || req.userId;

        
        const  savedReview= await Review.create({
            ...req.body,
            doctor:doctorId,
            user:userId
            
        })

  console.log(savedReview," thisisisiisi")
        // you should go with this or 
        // await Doctor.findByIdAndUpdate(doctorId, {
        //     $push: { Reviews: savedReview._id }
        //   }, { new: true });
        const reviewWithUser = await Review.findById(savedReview._id)
        .populate("user", "name photo"); 

        const doctor = await Doctor.findById(doctorId)
        doctor.Reviews.push(savedReview._id);
        await doctor.save(); 
         

        return  res.status(200).json({
            success: true,
            message: "Review submitted",
            data: reviewWithUser,
          });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
        
    }
}

module.exports={
    allReviews,createReviews
}