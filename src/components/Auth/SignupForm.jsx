import React, { Fragment } from "react"; // eslint-disable-next-line
import {BrowserRouter as Router, Link, useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import lock from '../../assets/lock.svg'
const SignupForm = ({handleToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Please enter an email address.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      errors.password = "Please enter a password.";
    }
    if (password !== cpassword) {
      errors.cpassword = "Password do not match";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {

        let data =
          {
            email: email,
            password: password
          }

        const response = await axios
            .post("https://site--marvel--gpvxp89pqghq.code.run/signup", data)
            .then((response) => { console.log("&&&&&&&&&&&",response.data.token);
              handleToken(response.data.token);
              navigate("/characters");}
        );
        console.log("+++++++++=",response);
        handleToken(response.data.token);
        navigate("/characters");
      } catch (error) {
        console.log("33333",error?.response?.status);
      }
    }
  };

  return (
    <Fragment>
      <div className="w-[50%] !ml-20">
        <div className="lg:flex lg:justify-between lg:mb-9 w-full mb-4">
          <div className="lg:mt-0 w-full mt-4">
            <input className="text-white/50 leading-8 tracking-[0.01em] w-full lg:w-11/12 box-border rounded-[50px] text-sm sm:py-4 xs2:py-2 py-1 xs2:px-6 pl-7 bg-cloudBurst/30" type="email" name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             {errors.email && <p className="mt-2 text-[#dc2626] ml-3">{errors.email}</p>}
          </div>
        </div>
        <div className={`lg:flex lg:justify-between w-full lg:mb-9 mb-4`}>
          <div className="lg:mt-0 w-full mt-4">
            <input className="text-white/50 leading-8 tracking-[0.01em] w-full lg:w-11/12 box-border rounded-[50px] text-sm sm:py-4 xs2:py-2 py-1 xs2:px-6 pl-7 bg-cloudBurst/30" type="password" name="Password"
              placeholder= "Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="mt-2 text-[#dc2626] ml-3">{errors.password}</p>}
          </div>
        </div>
          <div className="lg:mt-0 w-full mt-4">
          <input className="text-white/50 leading-8 tracking-[0.01em] w-full lg:w-11/12 box-border rounded-[50px] text-sm sm:py-4 xs2:py-2 py-1 xs2:px-6 pl-7 bg-cloudBurst/30" type="password" name="cPassword"
            placeholder= "ConfirmPassword"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
             />
            {errors.cpassword && <p className="mt-2 text-[#dc2626] ml-3">{errors.cpassword}</p>}
          </div>
      </div>
      <div className="flex flex-col items-center lg:items-start mt-10">
        <div className="bg-vidaLoca rounded-[50px] flex cursor-pointer" onClick={handleSubmit}>
          <div className="leading-4 font-bold text-white text-sm px-5 py-3 flex justify-center items-center w-4/5"> S&apos;inscrire</div>
          <div className="w-1/5 flex justify-end items-center mr-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.17731 0 0 7.17731 0 16C0 24.8227 7.17731 32 16 32C24.8227 32 32 24.8227 32 16C32 7.17731 24.8227 0 16 0ZM20.9427 16.9427L14.276 23.6093C14.016 23.8693 13.6747 24 13.3333 24C12.992 24 12.6506 23.8693 12.3906 23.6093C11.8693 23.088 11.8693 22.2453 12.3906 21.724L18.1147 16L12.3907 10.276C11.8694 9.75469 11.8694 8.912 12.3907 8.39069C12.912 7.86938 13.7547 7.86938 14.276 8.39069L20.9427 15.0574C21.464 15.5787 21.464 16.4213 20.9427 16.9427Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div className="mt-5">
          <div className="mt-3 text-grey2 tracking-[0.01em] leading-8 xs:text-sm sm:text-base">
            Already have an account?
            <Link to="/login" className="text-casablanca cursor-pointer"> Login Now </Link>
          </div>
          <div className="flex justify-center items-center lg:justify-start mt-2 tracking-[0.01em] leading-8 xs:text-sm sm:text-sm lg:text-base">
            <img src={lock} alt="lock" className="mr-3"/>
            <div className="text-grey2">Your data is protected.</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SignupForm
