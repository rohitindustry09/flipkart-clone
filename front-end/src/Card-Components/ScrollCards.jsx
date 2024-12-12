import CardItems from './CardItems.jsx';
import CardItemRow from './CardItemRow.jsx';
export default function ScrollCards({ product, styles }) {
  return (
    <>
      <div className="row scrolling-wrapper flex-row flex-nowrap m-0" style={styles}>
       {(product).map((value, index) => 
         <div key={index} className="scroll-items">
          
          <div className="scroll-image-container">
           <div className="scroll-items-img">
            <img src='/Flipkart/0a35c58d1c3aa1c2.jpeg'
             alt="image"
             className="image"
            />
           </div>
          </div>
         <div className="scroll-item-details">
           <div className="scroll-details-items">
            <h5 style={{ fontSize: '1rem'}} className="card-title">
             Graphic Tee - Sunset Vibes 
             <i class="fa-solid fa-arrow-up arrow-view"></i>
            </h5>
            <span>6GB | 128GB ROM </span>
            <span style={{ 
              color: '#03ff04', 
              display: 'block',
              textAlign: 'end',
              fontWeight: 'bold',
              fontStyle: 'italic',
              transform: 'rotate(2deg)'
             }}> Sale !!!</span>
                 <p className="card-text row-card-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

           </div>
         </div>

          {/*<div className="first-mid-last">
           <CardItems 
            key={index} 
            CardTitle={value.name}
            CardImage={value.image} 
            CardPrice={value.price}
           />
         </div>*/}

           
         </div>
       )}
      </div>
    </>
  );
}