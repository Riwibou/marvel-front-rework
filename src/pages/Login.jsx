/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LoginContent from "../components/Auth/LoginContent";
import LoginForm from "../components/Auth/LoginForm";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="h-full min-h-screen bg-black flex md:flex-row flex-col justify-center items-center py-4">
      <LoginContent />
      <LoginForm handleToken={handleToken}/>
    </div>
  );
};

export default Login;
