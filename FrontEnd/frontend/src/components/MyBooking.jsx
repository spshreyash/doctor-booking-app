



import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';
import { Loading } from '../pages/Loading';
import { formatDate } from '../utils/formatdate';

export const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(`${BASE_URL}/user/appointments/my-appointments`, {
          credentials: 'include',
        });

        const result = await res.json();
        console.log(result, 'this is appointment data');

        if (res.ok && result.success) {
          setBookings(result.bookings || []);
          setDoctors(result.doctors || []); // Store doctors separately
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-6">
      {loading && <Loading />}

      {!loading && (
        <div>
          {bookings.length === 0 ? (
            <p className="text-blue-400 mt-4">No Appointment Found</p>
          ) : (
            bookings.map((booking, index) => {
              // Accessing doctor information from the `doctors` array
              const doctor = doctors[0]; // Assuming there is one doctor in the array
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-xl p-6 mb-6 shadow-md flex flex-col md:flex-row items-center gap-6"
                >
                  {/* Doctor Image */}
                  <img
                    src={doctor?.photo || 'https://via.placeholder.com/150'}
                    alt={doctor?.name || 'No Doctor Name'}
                    className="w-32 h-32 rounded-full object-cover border"
                  />

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{doctor?.name || 'No Doctor Name'}</h2>
                    <p className="text-sm text-blue-600 capitalize">{doctor?.specialization || 'No Specialization'}</p>
                    <p className="text-gray-600 mt-2">{doctor?.bio || 'No Bio Available'}</p>

                    {/* Appointment Details */}
                    <div className="mt-4 space-y-1 text-sm text-gray-700">
                      <p><strong>Date:</strong> { formatDate( booking.createdAt ) || 'N/A'}</p>
                     
                      <p><strong>Paid:</strong> {booking.isPaid ? 'Yes' : 'No'}</p>
                      <p><strong>Price:</strong> ₹{booking.ticketPrice || '0'}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
