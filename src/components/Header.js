import React from 'react'

const Header = () => {
  return (
    // create a div with image in it
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
      className="w-44 mx-auto md:mx-0"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="netflix logo" />
    </div>
  )
}

export default Header;