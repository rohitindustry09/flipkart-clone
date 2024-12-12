import CollectionsTab from './CollectionsTab.jsx';
import { products } from '../Datas/HomeData.js';
import './WishlistsTab.css'
import SimilarNavigation from '../Nav-Components/SimilarNavigation.jsx';
export default function MyWishlistTab() {
  return (
  <>
   <SimilarNavigation 
    NavTabName1="My Wishlists"
    NavTabIcon1="me-3 fa-solid fa-arrow-left"
    NavTabName2="Cards"
    NavTabIcon2="fa-solid fa-cart-shopping"
    NavigationName1="My collections"
    NavigationName2="Collections i follow"
   />
   <div className="card" style={{
     marginTop: '10rem',
     border: 'none'
   }}>
    <CollectionsTab 
     TabTitle="My Wishlist" 
     product={products.tShirts}
    />
    <CollectionsTab 
     TabTitle="Public" 
     product={products.devices}
    />
   </div>
  </>
  );
}