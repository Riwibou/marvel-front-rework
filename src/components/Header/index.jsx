/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Dropdown from "../Dropdown"
import List from "../List"
import SearchBar from "../SearchBar";
import Logo from "../Logo"
import "./header.css"
import * as THREE from 'three';
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Header = ({ token, handleToken }) => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("")
  return (
    // <div className="center">
    //   <header className="container-header">
    //     <div className="header-logo">
    //       <Link to="/">
    //         <Logo/>
    //       </Link>
    //     </div>
    //     <SearchBar/>
    //     <div>
    //       <nav className="nav">
    //         <ul>
    //           {token ? (
    //             <>
    //             <button onClick={() => {handleToken(null)}}> Deconnexion </button>
    //             <div>
    //               <List/>
    //             </div>
    //             <div className="dropdown" style={{ display: 'none' }}>
    //               <Dropdown/>
    //             </div>
    //             <li>
    //             <Link to="/characters">View Characters</Link>
    //             </li>
    //             <li>
    //             <Link to="/comics">View Comics</Link>
    //           </li>
    //           </>
    //           ) : (
    //             <>
    //             <li>
    //               <Link className="login-btn" to="/login">
    //                 <p>Se connecter</p>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="signup-btn" to="/signup">
    //                 <p>S&apos;inscrire</p>
    //               </Link>
    //             </li>
    //             <div className="container-chars-comics">
    //               <li>
    //               <Link className="link-chars" to="/characters">View Characters</Link>
    //               </li>
    //               <li>
    //               <Link className="link-comics" to="/comics">View Comics</Link>
    //               </li>
    //             </div>
    //           </>
    //           )}
    //         </ul>
    //       </nav>
    //     </div>
    //   </header>
    // </div>
    <header className="!border !border-1 !border-[#dc2626]">
    <nav className="bg-cloudBurst shadow-lg px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
             {/* <img src={logo} class="mr-3 w-44 sm:h-16 cursor-pointer" alt="marvel Logo"  onClick={() => {
                            navigate("/")
                        }}/> */}
            <Logo/>
            <div class="flex items-center lg:order-2">
            <SearchBar/>
            {token ? <>
                <button className="text-white dark:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-[#128D3C] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ml-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" onClick={() => {handleToken(null)}}> Deconnexion </button>
                 <div>
                    <List/>
                </div>
            </> :<>
            <a href="/login" class="text-white dark:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-[#128D3C] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ml-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
            <a href="/signup" class="text-white bg-primary-700  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-[#128D3C] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
            </>

            }
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <p
                        onClick={() => {
                            setActiveTab("home")
                            navigate("/")
                        }}
                        class={`cursor-pointer block py-2 pr-4 pl-3 ${activeTab === 'home' ? 'text-[#128D3C]' : 'text-white'}  transition-transform duration-300 ease-in-out transform hover:scale-110 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`} aria-current="page">Home</p>
                    </li>
                    <li>
                        <p
                        onClick={() => {
                            setActiveTab("characters")
                            navigate("/characters")
                        }}
                        class={`cursor-pointer ${activeTab === 'characters' ? 'text-[#128D3C]' : 'text-white'}  block py-2 pr-4 pl-3 transition-transform duration-300 ease-in-out transform hover:scale-110 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}>Characters</p>
                    </li>
                    <li>
                        <p
                        onClick={() => {
                            setActiveTab("comics")
                            navigate("/comics")
                        }}
                        class={`cursor-pointer block py-2 pr-4 pl-3 ${activeTab === 'comics' ? 'text-[#128D3C]' : 'text-white'} transition-transform duration-300 ease-in-out transform hover:scale-110 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}>Comics</p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;
