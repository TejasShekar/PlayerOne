import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {userLogin} from "../redux/features/authSlice";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="dark:bg-[#252525] dark:text-white h-[calc(100vh-5rem)] grid place-content-center">
      <div className=" ">
        <h2 className="font-['Press_Start_2P'] text-2xl text-center m-2">LOGIN</h2>
        <form className=" w-96 flex flex-col">
          <div className="flex flex-col gap-2 m-2">
            <label htmlFor="e-mail" className="text-md ">
              Email
            </label>
            <input
              type="email"
              id="e-mail"
              className="dark:text-white border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
              required
              placeholder="user.name@email.com"
            />
          </div>
          <div className="flex flex-col gap-2 m-2 ">
            <label htmlFor="password" className="text-md ">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="dark:text-white w-full border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((prev) => !prev);
                }}
                className="absolute top-2 right-2"
              >
                <span className="material-icons-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-[#eeaf23] m-2 p-2 rounded-lg text-black font-bold"
            >
              Login
            </button>
            <button
              type="submit"
              className="border-[#eeaf23] border-2 m-2 p-2 rounded-lg font-bold "
            >
              Login as Guest
            </button>
          </div>
          <Link to="/signup" className="text-center mt-4">
            Create an account &gt;
          </Link>
        </form>
      </div>
    </main>
  );
};
