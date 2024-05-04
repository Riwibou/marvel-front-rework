// import { Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Logo from '../assets/logo.png'
import Marvel from '../assets/marvel.jpeg'

import AnimatedLogo from '../components/AnimatedLogo';
function Home() {
  return (
    <div className="bg-black min-h-screen flex md:flex-row flex-col items-center px-10">
    <div className="w-[40%] flex items-center justify-center p-4">
        <img src={Marvel} alt="Marvel Universe" className="w-[80%] h-[40%] rounded-lg" />
    </div>
    <div className=" flex flex-col items-center text-center p-4 space-y-4 -mt-10">
        <img src={Logo} alt="logo" className="mt-7 w-44 h-44 animated-logo my-10" />
        <h1 className="text-[50px] text-[#128D3C] font-bold">
            WELCOME TO THE MARVEL UNIVERSE
        </h1>
        <p className='text-3xl'>Explore your favorite characters and comics</p>
        <p className='text-lg'>Save them in the star</p>
        <p className="text-lg mt-2 bubbling-text">You will need to create an account for that.</p>
    </div>
</div>
  )
}

export default Home
