import ShowOptions from '../Show-Options-Compo/ShowWithout_DropOptions.jsx';
import './FullViewItem.css';
import FullViewItemSpecific from './FullViewItemSpecific.jsx';
export default function FullViewItem() {
  let IconStyle = {
    margin: '0 0rem',
    color: 'black'
  }
  return (
    <>
   <div className="View-Full-Nav-Tab p-2 w-100">
    
     <ShowOptions 
      classFor=""
      icon="fa-solid fa-arrow-left"
      title="Home"
      titleStyle={{
       color: 'black',
       fontSize: '1rem',
       letterSpacing: '2px'
      }}
      IconStyle={IconStyle}
     />
     
    <div className="items-full-view-nav">
     <ShowOptions 
      classFor=""
      icon="bi bi-search"
      IconStyle={IconStyle}
     />
     <ShowOptions 
      classFor=""
      icon="fa-solid fa-cart-shopping"
      IconStyle={IconStyle}
     />
     <ShowOptions 
      classFor=""
      icon="bi bi-person"
      IconStyle={IconStyle}
     />
   </div>
   
  </div>
  
    <FullViewItemSpecific />
  
    </>
  );
}