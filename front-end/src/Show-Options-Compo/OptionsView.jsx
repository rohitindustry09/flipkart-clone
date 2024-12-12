import ViewHeadings from './ViewHeadings.jsx'
export default function AccountDetails({ icon, title, text, forWho }) {
  return (
  <div className="p-1 ms-3 d-flex align-items-center w-100" style={{ width: '18rem' }}>

{ forWho === "credits-btn" ? 
    <i className={icon} style={{ fontSize: '3.5rem'}}></i>
    : 
    <i className={icon} style={{ fontSize: '1.5rem'}}></i>
}
    
   {forWho == "credits-arrow" || "credits-btn" ? 
       <ViewHeadings
         title={title} 
         text={text} 
         HeadingFor={forWho} 
       />
    :
     <div className="ms-3 flex-1">
       <p className="card-text" style={{fontSize: '1.2rem'}}>{text}</p> 
     </div>
    }
  </div>
  );
}