import './Footer.css'
import FooterForApp from './FooterForApp.jsx'
export default function Footer() {
  return (
  <div className="footer-leader">
    
  <div className="footer-boss">
    
    <div className="footer-items footer-icons">
      <FooterForApp 
       AppIcon="fa-brands fa-facebook" 
       Title=""
       AppLink="#" 
      />
      <FooterForApp 
       AppIcon="fa-brands fa-instagram" 
       Title=""
       AppLink="#" 
      />
      <FooterForApp 
       AppIcon="fa-brands fa-twitter" 
       Title=""
       AppLink="#" 
      />
      <FooterForApp 
       AppIcon="fa-brands fa-google-plus-g" 
       Title=""
       AppLink="#" 
      />
      <FooterForApp 
       AppIcon="fa-brands fa-linkedin" 
       Title=""
       AppLink="#" 
      />
    </div>
    <div className="footer-items footer-about">
      <FooterForApp Title="Home" />
      <FooterForApp Title="About" />
      <FooterForApp Title="Contact Us" />
      <FooterForApp Title="Our Team" />
    </div>
  </div>
  </div>
  );
}