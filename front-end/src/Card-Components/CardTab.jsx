import CardView from './CardView.jsx';
import { dataArray } from '../Datas/HomeData.js';
import { products } from '../Datas/HomeData.js';
import ScrollCards from '../Card-Components/ScrollCards.jsx';
export default function CardTab() {
  let styles = {
    background: 'linear-gradient(to bottom right, #ffd70d 50%, #c04eff 50%)'
  }
  return (
<>
<h5 style={{ textAlign: 'start', fontSize: '1rem' }} className="card-title mt-3 ms-3 mb-3"> | Top Deals </h5>
   <ScrollCards 
     product={products.tShirts} 
     styles={styles}
   />
<h4 style={{ textAlign: 'start', fontSize: '1rem' }} className="card-title mt-3 ms-3 mb-3"> | Top Brands This Week </h4>
       <CardView />
</>
  );
}