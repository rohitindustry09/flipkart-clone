import ReturnAnElement from '../Return-Elements-Compo/ReturnAnNormalElement.jsx';
export default function ShowCardSpecies({ value }) {
  return (
 <div className="card-body ms-3">
    <ReturnAnElement 
     title={value.name}
     withClass="card-title" 
     withStyle={{
      fontWeight: 'bold', 
      fontSize: '1rem',
      display: 'block'
     }}
    />
    <ReturnAnElement
     title="6 GB RAM"
     withClass="card-text mb-2"
     withStyle={{
      display: 'block',
      fontSize: '0.8rem'
     }}
    />
    {Array.from({ length: 4 }, (_, index)=> (
      
    <i className="fa-solid fa-star" key={index}></i> ))}
    <i className="fa-solid fa-star-half"></i>
    <br />

 <div className="discounts">
  <ReturnAnElement
   title={`$${value.price}`}
   withClass="discount discount-cut" 
   withStyle={{ 
    textDecoration: 'line-through' 
   }}
  />
  <ReturnAnElement
   title={`$${((parseInt(value.price)) - (parseInt(value.price))*29/100).toFixed(2)}`}
   withClasse="discount actual-cost"
  />
  <ReturnAnElement 
   title="29% off"
   withClass="discount discount-percentage"
  />
 </div>

  <div className="wow-top-offers mt-1 mb-2" style={{ display: 'block', fontSize: '.8rem'}}>
    <ReturnAnElement 
     title="WOW!"
     withClass="wow-tag"
    />
    <b>₹10686</b> with top offers
    <i className="fa-solid fa-angle-right"></i>
  </div>
  
  <ReturnAnElement 
   title="+59 Secured Packaging Fee"
   withClass="card-text m-1packaging-fee"
  />
  
  </div>
  );
}