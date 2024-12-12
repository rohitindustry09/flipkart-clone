import GetButtons from '../Return-Elements-Compo/GetButtons.jsx';
export default function ShowQueryButtons() {
  return (
   <div className="queries-for-carts">
    <GetButtons 
     BtnClass="query save-for-later" 
     icon="fa-solid fa-file-arrow-down" 
     title="Save for later" 
    />
    <GetButtons 
     BtnClass="query remove" 
     icon="fa-solid fa-trash-can" 
     title="Remove" 
    />
    <GetButtons 
     BtnClass="query buy-this-now" 
     icon="fa-solid fa-bolt" 
     title="Buy this now" 
    />
   </div>
  );
}