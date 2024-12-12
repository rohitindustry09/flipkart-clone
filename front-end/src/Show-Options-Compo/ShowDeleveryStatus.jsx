import ReturnAnElement from '../Return-Elements-Compo/ReturnAnNormalElement.jsx';
export default function ShowDeleveryStatus() {
  return (
   <div className="Delivery mt-2 d-flex flex-wrap">
    <div className="express-delivery-infos">
      <i className="fa-solid fa-truck"></i>
       <ReturnAnElement
        title="EXPRESS"
        withCLass=""
        withStyle={{
         fontWeight: 'bold',
         fontStyle: 'italic',
        }}
       />
       <ReturnAnElement 
        title="Delivery by tomorrow, 11 PM •"
       />
       <ReturnAnElement 
        title="₹70" 
        withStyle={{ 
         fontSize: '0.8rem',
         textDecoration: 'line-through'
        }}
       />
       <ReturnAnElement 
        title="FREE"
        withCLass="free-cost"
        withStyle={{
          color: '#ff06b4',
          fontWeight: 'bold'
        }}
       />
        &nbsp;
     </div>
     <div>
       <ReturnAnElement 
        title="Delivery by Oct 9, Wed •"
        withCLass=""
       />
       <ReturnAnElement 
        title="₹40"
        withCLass=""
        withStyle={{
          fontSize: '0.8rem',
          textDecoration: 'line-through'
        }}
       />
       <ReturnAnElement 
        title="FREE"
        withCLass="free-cost"
        withStyle={{
          color: '#ff06b4',
          fontWeight: 'bold'
        }}
       />
     </div>
   </div>
  );
}