import React from "react";
import { NavLink } from "react-router-dom";

export const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            // path data excluded
          />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <NavLink
              to="/home"
              className="px-12 bg-indigo-500 text-white font-semibold py-3"
            >
              Go Back To Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
