export default function SeeVariants({ type, variantText, variantCount }) {
  let styles = {
    color: 'white'
  };
  return (
    <>
    <div className="variant-container">
     <div className="">
       <span className=""> 
        {type} 
         : <b>{variantText}</b>
       </span>
     </div>
     <div className="ms-auto" style={{
       color: '#b2b2b2'
     }}> 
      <span>{variantCount} more</span>
      <i class="fa-solid fa-angle-right"></i>
     </div>
    </div>
    </>
  );
}