import GetButtons from '../Return-Elements-Compo/GetButtons.jsx';
import ReturnAnElement from '../Return-Elements-Compo/ReturnAnNormalElement.jsx';
export default function DeliveryPinView() {
  return (
   <div className="card-body address"
    style={{ 
     marginTop: '10rem',
     padding: '0 1rem'
    }}>
     <ReturnAnElement
      title="From Saved Addresses"
      withClass="card-title"
      withStyle={{
       fontSize: '1.1rem'
      }}
    />
    <GetButtons 
     BtnClass="btn-for-pincode"
     title="Enter Delivery Pincode"
    />
   </div>
  );
}