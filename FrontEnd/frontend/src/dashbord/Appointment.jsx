





import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/config';

export const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(`${BASE_URL}/bookings/doctor`, {
          method: 'GET',
          credentials: 'include', // send cookies (important for auth)
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch appointments');
        }

        const data = await res.json();
        setAppointments(data.data); // assuming response: { success, data: [...] }
        console.log(data.data, "this is appointments");
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[600px] md:w-full text-left text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Gender</th>
            <th scope="col" className="px-6 py-3">Payment</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Booked On</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((item, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    src={item.user.photo}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {item.user.name}
                    </div>
                    <div className="text-normal text-gray-500">
                      {item.user.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">
                  {item.isPaid ? (
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      <span>Paid</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                      <span>Unpaid</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.bookedOn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-400">
                No appointments found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
