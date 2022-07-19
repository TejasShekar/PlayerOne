import {useState} from "react";
import {Link, Navigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userSignUp} from "../redux/features/authSlice";

export const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const previousPath = location.state?.from?.pathname ?? -1;
  const user = useSelector((state) => state.auth.userData);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpData.email && signUpData.password) dispatch(userSignUp(signUpData));
  };

  if (user) {
    return <Navigate to={previousPath} replace={true} />;
  }
  return (
    <main className="dark:bg-[#252525] dark:text-white h-[calc(100vh-5rem)] grid place-content-center">
      <div className=" ">
        <h2 className="font-['Press_Start_2P'] text-2xl text-center m-2">SIGN UP</h2>
        <form className=" w-96 flex flex-col" onSubmit={handleSignUp}>
          <div className="flex flex-col gap-2 m-2">
            <label htmlFor="f-name" className="text-md ">
              First Name
            </label>
            <input
              type="text"
              id="f-name"
              value={signUpData.firstName}
              className="dark:text-white border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
              required
              onChange={(e) =>
                setSignUpData((prev) => ({...prev, firstName: e.target.value}))
              }
            />
          </div>
          <div className="flex flex-col gap-2 m-2">
            <label htmlFor="l-name" className="text-md ">
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              value={signUpData.lastName}
              className="dark:text-white border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
              required
              onChange={(e) =>
                setSignUpData((prev) => ({...prev, lastName: e.target.value}))
              }
            />
          </div>
          <div className="flex flex-col gap-2 m-2">
            <label htmlFor="e-mail" className="text-md ">
              Email
            </label>
            <input
              type="email"
              id="e-mail"
              value={signUpData.email}
              className="dark:text-white border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
              required
              placeholder="user.name@email.com"
              onChange={(e) =>
                setSignUpData((prev) => ({...prev, email: e.target.value}))
              }
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
                value={signUpData.password}
                className="dark:text-white w-full border-2 bg-transparent focus:border-[#eeaf23] focus:outline-none rounded-md p-2"
                required
                onChange={(e) =>
                  setSignUpData((prev) => ({...prev, password: e.target.value}))
                }
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
              Sign Up
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
