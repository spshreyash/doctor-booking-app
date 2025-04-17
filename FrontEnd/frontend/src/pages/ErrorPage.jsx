import gif404 from "../assets/error.gif"
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  console.log(error.status);

  const navigate = useNavigate();
  console.log("this is navigate console ", navigate);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="w-4/5 mx-auto mt-6 flex flex-col items-center justify-center gap-8">
        <figure>
          <img src={gif404} alt="not found" className="w-[500px] h-[500px]" />
        </figure>

        
        

        <div className="flex flex-col items-center gap-4 relative">
          <NavLink to="/home" className="absolute w-[250px] py-4 h-[30px] bg-orange-500 text-white text-sm font-bold rounded-lg flex items-center justify-center hover:bg-orange-600 transition duration-200">
            Go Back To Home
          </NavLink>

          <button
            onClick={handleClick}
            className="absolute top-[49px] w-[250px] h-[30px] bg-orange-500 text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};
