import FontIcon from '../Icons-Set/FontIcon.jsx';

export default function CardItems({ CardTitle, CardImage, CardPrice }) {

  return (
 <div className="col-md-1">
   <div className="card hover-me-card" style={{ width: '10rem', boxShadow: '2px 2px 20px #db8bff', height: '14rem' }}>
    <img className="card-img-top mt-1" src={CardImage} alt="Card image cap" style={{ height: '40%', objectFit: 'cover'}}/>
    <div className="card-body">
     <h5 className="card-title" style={{ fontSize: '.7rem'}}>{CardTitle}</h5>
     <span className="card-text" style={{fontSize: '.5rem', display: 'block'}}>6 GB RAM | 128 GB ROM </span>
     <span style={{ color: '#0ea70e', fontSize: '.6rem', display: 'block' }}>
      {Array.from({ length: 4 }, (_, index) => (
        <FontIcon key={index} icon="fa-solid fa-star" />
     ))}
       <FontIcon icon="fa-solid fa-star-half" />
     </span>
     <span style={{ fontSize: '.8rem'}}><strike>${CardPrice}</strike> <big style={{ color: '#0ea70e' }}> <span> ${Number((CardPrice - CardPrice * 25 / 100).toFixed(2))}</span> 
         <span style={{ color: '#ff5491', display: 'block',
           textAlign: 'end',
           fontWeight: 'bold'
         }}> 29% off </span>
        </big>
      </span>
    </div>
  </div>
  </div>
  );
}