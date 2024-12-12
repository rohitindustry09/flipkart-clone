import HomeTab from './Home-Components/HomeTab.jsx';
import MyProfile from './Account-Components/MyProfile.jsx';
import MyCardTab from './Card-Components/MyCardTab.jsx';
import MyWishlistTab from './Wishlist-Components/MyWishlistTab.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';

import NavTabReal from './Main-Router/NavTabReal.jsx'
function App() {
  return (
    <>
     <BrowserRouter>
      <NavTabReal />
     </BrowserRouter>
    </>
  );
}

export default App;