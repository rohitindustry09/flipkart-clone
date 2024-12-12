import ShowSelectQty from './ShowSelectQty';
export default function ShowImageQty({ CardImage }) {
  return (
  <div className="card ms-3 mt-3 p-0" style={{ width: '10rem', height: '10rem' }}>
  <div style={{ height: '5rem', 
      width: '1rem',
      overflow: 'hidden'
    }}>
    <img src={CardImage} 
     className="card-img-top"
     alt="image" 
     style={{ 
      objectFit: 'contain',
      transform: 'translateY(-2.5rem)'
     }} 
    />
  </div>
   <div className="card-body w-100 card qty-parent" style={{ border: 'none'}}>
    <ShowSelectQty />
   </div>
</div>
  );
}