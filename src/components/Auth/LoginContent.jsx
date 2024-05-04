// import React from 'react'
import logo from '../../assets/logo.png'
// import userImage from '../../assets/userImage.svg'
import star from '../../assets/star.svg'

const LoginContent = () => {
  return (
    <div className={`text-white bg-gradient-to-t rounded-[35px] lg:w-3/5 md:w-10/12 hidden lg:flex from-[#8B0000] to-[#4B0000]`
    }>
      <div className="lg:ml-12 mb-6 md:mb-16  md:w-11/12 sm:w-full md:mx-auto">
        <div className="md:ml-16 sm:ml-4 flex justify-center flex-col items-center md:items-start text-center md:text-start">
          <div className="md:mt-32 mt-4">
            <img src={logo} alt="imageLogo" className="w-[149px] md:w-[191px]"/>
          </div>
          <div className="ml-3 mt-4 md:mt-0 font-bold text-3xl md:text-4xl lg:text-6xl leading-[38px] md:leading-[80px]">
            Welcome back!
          </div>
          <div className="md:mt-3 mt-6 ml-3 not-italic font-normal text-sm md:text-xs lg:text-base leading-7 w-[90%] md:w-[90%] lg:w-[80%]">
            Let's find new comics and heros. I'm sure you will find everything you need here.
          </div>
        </div>
        <div className="mt-6 bg-grey1/20 lg:mr-9 rounded-[30px] w-11/12 md:w-full lg:w-11/12 m-auto">
          <div className="w-full md:pt-10 pt-5 flex justify-center flex-col md:flex-row lg:items-start items-center">
            <div className="md:flex flex-col w-1/6 md:ml-4 lg:ml-16 items-center">
              {/* <div>
                <img src={userImage} alt="User" className="max-w-[73px] max-h-[70px]" />
              </div> */}
              <div className="pt-2">
                <img src={star} alt="start" className="max-w-[73px] max-h-[70px]" />
              </div>
            </div>
            <div className="mt-5 md:mt-0 tracking-[0.01em] w-[90%] text-center md:text-start md:mr-8 mx-auto md:ml-2 flex text-white/70 not-italic font-normal md:text-xs lg:text-base leading-6">
              I can read and remember all the great advanture we had with my love, Jean Grey.
            </div>
          </div>
          <div className="flex justify-center md:justify-end pb-7 mr-8 font-bold text-base leading-5 mt-5 md:mt-0">Wolverine<span className="text-grey2 pl-1"> </span></div>
        </div>
        <div className="flex w-10 mt-5 justify-between m-auto">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.52"/>
          </svg>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#F7A74F"/>
          </svg>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="white" fillOpacity="0.52"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default LoginContent
