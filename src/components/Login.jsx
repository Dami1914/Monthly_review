import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { GiEvilEyes } from "react-icons/gi";
import { PiEyeSlashFill } from "react-icons/pi";
import Logo from "../assets/Logo";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const passRef = useRef(null);
  const [seePass, setSeePass] = useState(false);
  const navigate = useNavigate();
  const userNameRef = useRef({});
  const errorButtonRef = useRef({})
  const buttonRef = useRef({})
  const [userCredential, setUserCredential] = useState({
    username: "",
    password: "",
  });
  const [errorMesg, setErrorMsg] = useState(true);

  function handleLogin(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setUserCredential((prev) => {
      return { ...prev, [name]: value };
    });
  }
  useEffect(() => {
    if (seePass) {
      passRef.current.type = "text";
    } else {
      passRef.current.type = "password";
    }
  }, [seePass]);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

 useEffect(()=>{
    if(errorMesg){
        buttonRef.current.classList.add('slide-out')
        errorButtonRef.current.classList.add('slide-in')
    }else{
        buttonRef.current.classList.remove('slide-out')
        errorButtonRef.current.classList.remove('slide-in')
    }
 })

  return (
    <div className="w-[90%] flex  justify-center  items-center bg-white h-[90%] rounded-2xl">
      <fieldset className="w-full flex flex-col gap-10  p-5 lg:p-10 h-full">
        <legend className="text-2xl font-black text-green-900">Sign In</legend>
        <div className="w-full font-bold text-slate-600 flex justify-center">
          <div>Welcome to CityTrost Services</div>
        </div>
        <form className="w-full  lg:p-5 p-2 flex flex-col ">
          <div className="w-full px-2  lg:gap-0 gap-3 flex  p-5">
            <div className="w-1/12 text-gray-700  flex justify-center items-center text-2xl">
              <FaUserCircle />
            </div>
            <div className="w-full relative group">
              <input
                ref={userNameRef}
                name="username"
                required
                autoComplete="false"
                onChange={handleChange}
                value={userCredential.username}
                id="username"
                className="peer placeholder-transparent  w-full h-[2em]"
                type="text"
                placeholder="User name"
              />
              <label
                className="absolute -top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-[.4rem] transition-all peer-placeholder-shown:text-sm text-gray-600 bg-white text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:left-[21px] left-2 peer"
                htmlFor="username"
              >
                User name
              </label>
            </div>
          </div>
          <div className="w-full flex px-2 p-5 lg:gap-0 gap-3  ">
            <div className="w-1/12 text-gray-700 flex justify-center items-center text-2xl">
              <PiPasswordBold />
            </div>
            <div className="w-full relative group">
              <input
                ref={passRef}
                id="password"
                required
                onChange={handleChange}
                value={userCredential.password}
                name="password"
                className="peer p-2 placeholder-transparent w-full  h-[2em]"
                type="password"
                placeholder="Password"
              />
              <label
                className="absolute -top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-[.4rem] bg-white transition-all peer-placeholder-shown:text-sm text-gray-600 left-2 peer-placeholder-shown:text-gray-400  peer-placeholder-shown:left-[21px]"
                htmlFor="password"
              >
                Password
              </label>
              {userCredential.password === "" ? (
                ""
              ) : (
                <div className="absolute flex justify-center items-center mr-2 right-0 top-1 text-2xl w-[30px] h-[30px] ">
                  {seePass ? (
                    <div
                      onClick={() => setSeePass(!seePass)}
                      className="cursor-pointer"
                    >
                      <GiEvilEyes />
                    </div>
                  ) : (
                    <div
                      onClick={() => setSeePass(!seePass)}
                      className="cursor-pointer "
                    >
                      <PiEyeSlashFill />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-full p-5 ">
            <div className="w-full flex relative">
              <button
                ref={buttonRef}
                onClick={handleLogin}
                className="bg-green-600 transition-transform btn3 duration-200  ease-in-out transform translate-x-0  hover:bg-white hover:text-green-600 relative hover:border hover:border-green-600 w-full rounded-lg p-2 text-white"
              >
                Login
              </button>
              <div
                ref={errorButtonRef}
               className="w-full duration-150  transition-transform ease-in-out bg-red-500 flex justify-center  rounded-lg absolute transform -translate-x-[550px] items-center p-1 text-white font-bold">
                It seems you are having an issue logging in, click to try again
                then
              </div>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
