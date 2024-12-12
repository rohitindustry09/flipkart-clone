import OptionsView from '../Show-Options-Compo/OptionsView.jsx';
import Profile4Tabs from './Profile4Tabs.jsx';
import ProfileNavTab from './ProfileNavTab.jsx';
import CardItems from '../Card-Components/CardItems.jsx';
import OptionsLayout from './OptionsLayout.jsx';
import ScrollCards from '../Card-Components/ScrollCards.jsx';
import { products } from '../Datas/HomeData.js';
import './MyProfile.css'
export default function MyProfile() {
  let styles = {
    background: 'linear-gradient(to bottom right, #ff3f3f 50%, #ff4e9f 50%)'
  }
  return (
<>
<ProfileNavTab />
<Profile4Tabs />
  
   <OptionsLayout heading="" 
    optionIcon="fa-regular fa-envelope"
    optionTitle="Add/Verify your Email •"
    optionText="Get latest updates of your orders"
    tabFor="credits-btn"
   />
   <OptionsLayout heading="Credit Options" 
    optionIcon="fa-regular fa-credit-card"
    optionTitle="Cash loan up to ₹10,00,000"
    optionText="100% Digital | Instant Approval"
    tabFor="credits-arrow"
   />
   <OptionsLayout heading="Credit Score" 
    optionIcon="fa-solid fa-book-open-reader"
    optionTitle="Free credit score check"
    optionText="Get detailed credit report instantly"
    tabFor="credits-arrow"
   />
  
  {/*card*/}
  <h4 className="card-title ms-3 mt-3">
     Recently Viewed Stores
  </h4>
<ScrollCards product={products.pcs} styles={styles} />
  
  {/*text workers*/}
   <OptionsLayout heading="Account Settings" 
    optionIcon="fa-solid fa-circle-plus"
    optionTitle=""
    optionText="Flipkart Plus"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-regular fa-user"
    optionTitle=""
    optionText="Edit Profile"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-regular fa-hard-drive"
    optionTitle=""
    optionText="Saved Credit / Debit &. Gift Cards"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-solid fa-map-location-dot"
    optionTitle=""
    optionText="Saved Addresses"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-solid fa-language"
    optionTitle=""
    optionText="Select Language"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-regular fa-bell"
    optionTitle=""
    optionText="Notification Settings"
    tabFor=""
   />
{/*second setting*/}
   <OptionsLayout heading="My Activity" 
    optionIcon="fa-regular fa-pen-to-square"
    optionTitle=""
    optionText="Reviews"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-regular fa-comments"
    optionTitle=""
    optionText="Questions &. Answers"
    tabFor=""
   />
   <OptionsLayout heading="Earn with Flipkart" 
    optionIcon="fa-solid fa-store"
    optionTitle=""
    optionText="Sell on Flipkart"
    tabFor=""
   />
   <OptionsLayout heading="Feedback &. Information" 
    optionIcon="fa-solid fa-clipboard-list"
    optionTitle=""
    optionText="Terms, Polices and Licenses"
    tabFor=""
   />
   <OptionsLayout heading="" 
    optionIcon="fa-solid fa-clipboard-question"
    optionTitle=""
    optionText="Browse FAQs"
    tabFor=""
   />
   <button className="logout"> Log Out <i className="fa-solid fa-right-from-bracket"></i> </button>
</>

  );
}