import {useState} from "react";
import {Link} from "react-router-dom";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  return (
    <main className="dark:bg-[#252525] dark:text-white h-[calc(100vh-5rem)] grid place-content-center">
      <div className=" ">
        <h2 className="font-['Press_Start_2P'] text-2xl text-center m-2">SIGN UP</h2>
        <form className=" w-96 flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2 m-2">
            <label htmlFor="f-name" className="text-md ">
              First Name
            </label>
            <input
              type="text"
              id="f-name"
              className="dark:text-white border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2 m-2">
            <label htmlFor="l-name" className="text-md ">
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="dark:text-white border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
              required
            />
          </div>
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
                type={showPassword.password ? "text" : "password"}
                id="password"
                className="dark:text-white w-full border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((prev) => ({...prev, password: !prev.password}));
                }}
                className="absolute top-2 right-2"
              >
                <span className="material-icons-outlined">
                  {showPassword.password ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 m-2 ">
            <label htmlFor="confirm-password" className="text-md ">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                id="confirm-password"
                className="dark:text-white w-full border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((prev) => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword,
                  }));
                }}
                className="absolute top-2 right-2"
              >
                <span className="material-icons-outlined">
                  {showPassword.confirmPassword ? "visibility_off" : "visibility"}
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
          </div>
          <Link to="/login" className="text-center mt-4">
            Already have an account ?
          </Link>
        </form>
      </div>
    </main>
  );
};
