import React, { Fragment } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = ({handleToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    let data =
    {
      email: email,
      password: password
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://site--marvel--gpvxp89pqghq.code.run/login',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get("marvel-token")}`
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      handleToken(response.data.token);
      navigate("/characters");
    })
    .catch((error) => {
      setError("Invalid email or password. Please try again.");
      console.log(error);
    });
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="text-white w-11/12 md:w-3/5 lg:w-2/5 lg:mt-16 flex flex-col justify-center items-center">
      <div className="2xl:w-[70%] xl:w-4/5 md:w-[90%] w-full flex flex-col lg:items-start items-center justify-center">
        <div className="text-3xl xl:text-[45px] mb-9 not-italic font-bold leading-[36px]">Login to Continue</div>
        <div className="flex flex-col w-full sm:w-11/12 items-center lg:items-start">
          <div className="mb-5 w-full">
            <input className="tracking-[0.01em] w-full text-white/50 box-border rounded-[50px] text-sm md:text-xs2 lg:text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst" type="email" name="email" placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>
          <div className="w-full">
            <input className="tracking-[0.01em] w-full text-white/50 box-border rounded-[50px] md:text-xs2 lg:text-sm text-sm py-5 md:py-3 lg:py-4 px-7 bg-cloudBurst leading-4" type="password" name="password" placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
          {error && <div className="mt-2 text-[#dc2626] ml-3">{error}</div>}
          <div className="flex justify-between mx-1 my-5 sm:text-sm md:text-xs2 lg:text-sm sm:flex-row w-full">
            <div>
              <input type="checkbox" name="remember" />
              <label className="text-grey2"><span className="ml-3 tracking-[0.01em]">Remember me</span></label>
            </div>

          </div>
          <div className="bg-vidaLoca lg:mt-12 md:mt-6 mt-8 w-2/3 xl:w-1/3 rounded-[50px]">
             <p
                className="text-white px-5 py-3 flex justify-center items-center font-bold md:text-xs lg:text-sm leading-4 cursor-pointer"
                onClick={handleSubmit}
              >
                Connexion
              </p>
          </div>
          <div className="mt-3 text-grey2 md:text-xs2 lg:text-base leading-[18px] tracking-[0.01em] text-center md:text-start">
          You don't have an account ?
            <Link to="/signup" className="text-casablanca"> Sign-up ! </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
