import Carousel from 'react-bootstrap/Carousel'; 
import { dataArray } from '../Datas/HomeData.js';

export default function Carousel_Items() {
  return (
    <Carousel> {/* Add Carousel wrapper */}
      {dataArray.items.map((item, index) => 
        <Carousel.Item interval={1000} key={index}>
          <img
            className="d-block w-100"
            src={item}
            alt={`First ${index + 1}`}
          />
        </Carousel.Item>
      )}
    </Carousel>
  );
}
