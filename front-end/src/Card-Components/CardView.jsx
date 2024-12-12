import CardItems from './CardItems.jsx';
import CardItemRow from './CardItemRow.jsx';
import { products } from '../Datas/HomeData.js';
import { useState } from 'react';

export default function CardView() {
  let getColor = (index) => {
    const palette = products.colorPalette;
    let colored = palette[index % palette.length+9];
    return colored;
  };
  
  return (
     <>
      {products.tShirts.map((value, index) => 
      
      //send item id-↓ here down
       <a href="/show" className="link">
       
       
       
        <div key={index} className="hover-me-card-view" 
        style={{ background: `linear-gradient(to bottom right, white 50%, ${getColor(index)} 50%)`,
        }}>
        
          <CardItemRow CardTitle={value.name} />
          <CardItems CardTitle={value.name} CardImage={value.image} />
        </div>
        
        
        </a>
        
      )}
     </>
  );
}
