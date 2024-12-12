import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavBar() {

  return (
    <>
      <ul className="ul-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/My-Profile">My Profile</Link>
        </li>
        <li>
          <Link to="/My-Carts">My Carts</Link>
        </li>
        <li>
          <Link to="/My-Wishlists">My Wishlists</Link>
        </li>
        <li>
          { !user && (
            <Link to="/signup">Signup</Link>) }
        </li>
      </ul>
    </>
  );
}
