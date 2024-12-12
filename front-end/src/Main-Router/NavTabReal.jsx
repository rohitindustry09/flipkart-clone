import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavTab from '../Nav-Components/NavTab.jsx';
import HomeTab from '../Home-Components/HomeTab.jsx';
import MyProfile from '../Account-Components/MyProfile.jsx';
import MyCardTab from '../Card-Components/MyCardTab.jsx';
import MyWishlistTab from '../Wishlist-Components/MyWishlistTab.jsx';
import Footer from '../Footer/Footer.jsx';
import SignUp from '../Home-Components/For-User/SignUp.jsx';
import LogIn from '../Home-Components/For-User/LogIn.jsx';
import Logout from '../Home-Components/For-User/Logout.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PrivateLogout from './PrivateForLogout.jsx';
import FullViewItem from '../View-Full-Components/FullViewItem.jsx';
export default function NavTabReal() { 
  const user = localStorage.getItem('user');
  
  return (
  <>
      
      <Routes>
         <Route path="/" element={<><NavTab/> <HomeTab /></>} />
         <Route path="/show" element={<FullViewItem />} />
        <Route element={<PrivateLogout />}>
         <Route path="/myProfile" element={<MyProfile />} />
         <Route path="/cards" element={<MyCardTab />} />
         <Route path="/wishlist" element={<MyWishlistTab />} />
         <Route path="/orders" element={<h3> Orders </h3>} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
  </>
  );
}
