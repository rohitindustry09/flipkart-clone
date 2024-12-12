export default function ReturnAnElement({returnElement}){
  return (
   <div className="ms-auto pe-3">
     { returnElement == "i" ?
       
     <i className="fa-solid fa-angle-right" style={{ fontSize: '1rem'}}></i> 
     : 
     <button className="btn btn-primary" style={{ background: 'red' }} type="button">
        Update
     </button>
     }
   </div>
  );
}