import ShowImageQty from './ShowImageQty.jsx';
import ShowCardSpecies from './ShowCardSpecies.jsx';
import ShowDeleveryStatus from './ShowDeleveryStatus.jsx';
import ShowQueryButtons from './ShowQueryButtons.jsx';
import { products } from '../Datas/HomeData.js';

export default function ShowMyCards({ Card, index }) {
  let getColor = (index) => {
    const palette = products.colorPalette;
    let colored = palette[index % palette.length+9];
    return colored;
  };
  
  return (
  <div style={{
    borderBottom: '10px solid #f1f1f1',
  }}>
    
   <div className="pt-3 m-3" 
    style={{ 
     borderRadius: '20px', 
     backgground: `linear-gradient(to top right, white 84%, ${getColor(index)} 20%)`,
    }}>
     
    <div className="card-body d-flex">
     <ShowImageQty CardImage={Card.image}/>
     <ShowCardSpecies value={Card} />
    </div>
    
    <ShowDeleveryStatus />
    <ShowQueryButtons />
  </div>
</div>
  );
}
