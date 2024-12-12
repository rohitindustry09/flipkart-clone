import './MyCardTab.css';
import SimilarNavigation from '../Nav-Components/SimilarNavigation.jsx';
import DeliveryPinView from '../Show-Options-Compo/DeliveryPinView.jsx'
import ShowMyCards from '../Show-Options-Compo/ShowMyCards.jsx';
import { products } from '../Datas/HomeData.js';

export default function MyCardTab() {
  return (
    <>
     <SimilarNavigation 
      NavTabName1="My Cards"
      NavTabIcon1="me-3 fa-solid fa-arrow-left"
      NavTabName2="Wishlist"
      NavTabIcon2="fa-solid fa-heart"
      NavigationName1="Flipkart (14)"
      NavigationName2="Grocery (1)"
     />

<DeliveryPinView />

{
  products.devices.map((value, index)=> 
   <ShowMyCards Card={value} index={index} key={index}/>
  )
}

    </>
  );
}