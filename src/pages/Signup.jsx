/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LoginForm from "../components/Auth/LoginForm";
import Logo from '../assets/logo.png'
import SignupForm from "../components/Auth/SignupForm";


const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            .then((response) => { console.log(response.data.token);
              handleToken(response.data.token);
              navigate("/characters");}
        );
        console.log(response.data.token);
        handleToken(response.data.token);
        navigate("/characters");
      } catch (error) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <div className="h-full min-h-screen bg-black flex flex-row justify-center items-center px-2 py-8">
    <div className="flex flex-col items-center justify-center text-white bg-vulcan rounded-[15px] lg:rounded-[50px] w-[80%] pb-10">
      <img src={Logo} alt="logo" className="mt-7 w-44 h-44"/>
      <p className="text-[40px] -mt-2 mb-8">Signup To Marvel</p>
      <SignupForm handleToken={handleToken}
      />
    </div>
  </div>
  );
};

export default Signup;
