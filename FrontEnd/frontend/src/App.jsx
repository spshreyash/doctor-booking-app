import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Doctor } from "./pages/Doctor";
import { DoctorDeatils } from "./pages/DoctorDeatils";
import { Applayout } from "./Applayout/Applayout";
import { Login } from "./pages/Login";
import {  Signup } from "./pages/Signup";
import { Service } from "./pages/Service";
import { About } from "./pages/About";
import { UserProfile } from "./dashbord/UserProfile";
import { DoctorProfile } from "./dashbord/DoctorProfile";
import {ProtectedRoute} from "./components/ProtectedRoute.jsx"
import { CheckoutSuccess } from "./pages/CheckoutSuccess.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";


export const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
     element:<Applayout />,
     errorElement:<ErrorPage/>,
    children:[
        {
          path: "/",
          element:<Login  />
          
        },
       
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/doctors",
          element: <Doctor />,
        },
        {
          path: "/doctors/:id",
          element: <DoctorDeatils />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/service",
          element:<Service/>

        },
        {
          path:"/about",
          element:<About/>

        },
        {
          path:"/user/profile/me",
          element:( <ProtectedRoute  allowedRoles={["Doctor", "patient", "Admin"]}>
            <UserProfile/>
              </ProtectedRoute>),
        
        },
        {
          path:"/doctor/profile/me",
          element:( <ProtectedRoute allowedRoles={["Doctor", "patient", "Admin"]}>
           <DoctorProfile/>
              </ProtectedRoute>),
        
        },
        {
          path:"/checkout-success",
          element:<CheckoutSuccess/>
        },
        

       
        
       

       
      ]
    },
   
  ]);

  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
       
        <RouterProvider router={router}></RouterProvider>
       
      </div>
    </>
  );
};
