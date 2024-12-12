import React from 'react';
import FontIcon from '../Icons-Set/FontIcon.jsx';
import NavLink from './NavLink.jsx';
import Carousel_Items from '../Card-Components/Carousel-Items.jsx';
import DropItems from '../Show-Options-Compo/DropItems.jsx';
import CardTab from '../Card-Components/CardTab.jsx';
import './NavTab.css'
import { Link, useNavigate } from 'react-router-dom';
export default function NavTab() {
  let user = localStorage.getItem('user');
  let navigate = useNavigate();
  function handleSignup() {
    navigate('/signup');
  }
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light bg-body-tertiary custom-font">
        <div className="nav-container">
          <div><a className="" href="#">Flipkart</a></div>

          {/* Search Form */}
          <form className="input-others" role="search">
            <FontIcon icon="bi bi-search me-2" />
            <input type="search" className="form-control" placeholder="Search" aria-label="Search"/>
          </form>
          {/* Nav Links */}
          <div className="Dropdown-nav">
            {/* Account Dropdown */}
            
            { !user ? 

              <button onClick={handleSignup}
               className="btn-query-signup-link">
                Sign up
              </button>

            : <DropItems dropFor="Account" dropIcon="bi bi-person" /> }
            
            <NavLink /> 
           <DropItems dropFor="We here!" dropIcon="" />
            
          </div>
        </div>
      </nav>

      {/* Carousel 
      <Carousel_Items />

       Cards *
      <CardTab /> */} 
    </>
  );
}
