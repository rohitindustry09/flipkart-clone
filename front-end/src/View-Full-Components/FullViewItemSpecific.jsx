import SeeVariants from './SeeVariants.jsx';
import ShowDeleveryStatus from '../Show-Options-Compo/ShowDeleveryStatus.jsx';
import ShowHighLightItem from './ShowHighLightItem.jsx';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
export default function FullViewItemSpecific() {
  
  const fixedScrollRef = useRef(null);
  useEffect(()=> {
    const fixedDiv = fixedScrollRef.current;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
     /* fixedDiv.style.opacity = scrollTop > 50 ? '1' : '0';*/
     if (scrollTop > 50) {
      fixedDiv.style.bottom = '0px';
     } else {
       
      fixedDiv.style.bottom = '-100px';
     }
    });
  }, []);
  
  return (
    <>
  <div className="container-full-view">
    <div className="full-view-parent">
    <div className="full-view-inner-parent curve-the-parent">
    
     <div className="full-view-title">
        <h5> Basic Cotton T-Shirt - Black </h5>
        <span> 6GB | 128 GB </span>
     </div>
      <div>
       <i class="bi bi-person-hearts"></i> 
      </div>
   </div>
  </div>
      <div className="full-view-image-container">
       <img src="/Flipkart/dej9wdlotfhitexttgi1.png" alt="image"/>
      </div>
      <div className="select-veriant curve-the-parent">
       <h6 className="m-2"> Select Vairant </h6>
       <div className="curve-the-parent" style={{ background: 'white'}}>
        <SeeVariants 
         type="Color"
         variantText="Starshine Green"
         variantCount="3"
        />
        <SeeVariants 
         type="Storage"
         variantText="128 GB"
         variantCount="2"
        />
        <SeeVariants 
         type="RAM"
         variantText="4 GB"
         variantCount="2"
        />
      </div>
    </div>
    
    <div className="parent-price-details curve-the-parent" style={{
      margin: '1rem 2rem'
    }}>
      <div className="price-details">
       <span style={{ color: '#00db25', display: '',
           textAlign: '',
           fontWeight: 'bold',
           fontSize: '1.2rem'
         }}> 29% off
       </span>
       <span style={{ fontSize: '.8rem', fontWeight: 'bold'}}>
        <big> 
        <strike style={{ color: '#a5a5a5'}}>$11,999</strike> 
         <span class="shine-text" style={{ color: '', fontSize: '1.2rem'}}> ${ (11999 * 29/100) } </span> 
        </big>
       </span> 
      </div>
       <span style={{
        display: 'block',
        fontWeight: 'bold',
        fontSize: '0.8rem'
       }}> EMI from $27/month.</span>
    </div>
  <div className="parent-deliver-to">
    <div className="deliver-to">
     <div>
     <span> Deliver to : <span style={{
       fontWeight: 'bold',
        fontSize: '0.9rem'
     }}> Harish, 121001 </span></span>
     <span style={{ color: '#a5a5a5',
       display: 'block',
       fontSize: '0.8rem'
     }}> Address house </span>
     </div>
     <button className="ms-auto btn-query"> Change </button>
    </div>
    <div className="curve-the-parent" style={{
      fontSize: '0.8rem',
      background: '#dbfff7'
    }}>
     <ShowDeleveryStatus />
    </div>
  </div>
    <div className="parent-deliver-to m-3 highlight-curved curve-the-parent" style={{
      background: 'white',
    }}>
      <h3 style={{ letterSpacing: '2px' }}> Highlights </h3>
      
      <ShowHighLightItem 
       itemIcon="bi bi-sd-card"
       itemName="RAM | ROM"
       itemTitle="4 GB RAM | 128 GB ROM"
       itemText="Store upto 3000 photos"
      />
      <ShowHighLightItem 
       itemIcon="bi bi-cpu"
       itemName="Processor"
       itemTitle="6 GEN 1 | Octa Core | 2.2 GHz"
       itemText="No lag performonace."
      />
      <ShowHighLightItem 
       itemIcon="bi bi-cpu"
       itemName="Rear Camera"
       itemTitle="50MP + 2MP"
       itemText="Get Vibrant Pictures. Full Of Details"
      />
      <ShowHighLightItem 
       itemIcon="bi bi-sd-card"
       itemName="RAM | ROM"
       itemTitle="4 GB RAM | 128 GB ROM"
       itemText="Store upto 3000 photos"
      />
      <ShowHighLightItem 
       itemIcon="bi bi-cpu"
       itemName="Processor"
       itemTitle="6 GEN 1 | Octa Core | 2.2 GHz"
       itemText="No lag performonace."
      />
      <ShowHighLightItem 
       itemIcon="bi bi-cpu"
       itemName="Rear Camera"
       itemTitle="50MP + 2MP"
       itemText="Get Vibrant Pictures. Full Of Details"
      />
      
    </div>
   </div>
    <div className="buy-add-btn-parent curve-the-parent" style={{
      background: '#f3f3f3'
    }} ref={fixedScrollRef}>
     <button className="add-to-cart"> 
      <i class="bi bi-bag-plus"></i> Add to cart
     </button>
     <button className="buy-now-btn"> 
      <Link to="/Buy" className="link"> Buy now </Link>
     </button>
     
    </div>
    </>
  );
}