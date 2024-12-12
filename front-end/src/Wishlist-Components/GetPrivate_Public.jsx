import ReturnAnElement from '../Return-Elements-Compo/ReturnAnNormalElement.jsx';
export default function GetPrivate_Public({ TabTitle, product }) {
  return (
   <div> 
     { TabTitle === "My Wishlist" ? 
     <>
     <i className="fa-solid fa-unlock-keyhole" style={{ fontSize: '1rem' }}></i>
      <ReturnAnElement 
       title={` Private • ${product.length} items `}
      />
     </>
     : <ReturnAnElement 
        title={` Public • ${product.length} items `}
       />
     }
   </div>
  );
}