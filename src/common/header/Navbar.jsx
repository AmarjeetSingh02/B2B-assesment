import React, { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
            <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/hero'>Hero</Link>
              </li>
              <li>
                <Link to='/product'>Product</Link>
              </li>
              <li>
                <Link to='/category'>Category</Link>
              </li>
              <li>
                <Link to='/track'>Track My Order</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>

            {/* <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
