import ReturnAnElement from './ReturnAnNormalElement.jsx';
export default function getButtons({ BtnClass, icon, title }) {
  return (
   <button className={BtnClass}>
     { icon !== "" ? 
       <i className={icon}></i> 
     : "" }
    <ReturnAnElement
     title={title}
    />
   </button>
  );
}