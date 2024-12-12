export default function ShowImages({ product }) {
  return (
  <div className="private-items-carts">
{
  product.map((value, index)=>
    <div key={index}>
      <img 
       className="image-private" 
       src={value.image} 
       alt="image" 
       style={{
        height: '5rem',
        width: '5rem'
      }} />
    </div>
  )
}
   
  </div>
  );
}