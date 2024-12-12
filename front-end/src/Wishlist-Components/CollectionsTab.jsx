import ShowPrivatePublic from './ShowPrivatePublic.jsx'
import ShowImages from '../Show-Options-Compo/ShowImages.jsx'
export default function CollectionsTab({ TabTitle, product }) {
  return (
  <div className="my-wishlists">
   <div className="wishlists-component">
    
    <ShowPrivatePublic TabTitle={TabTitle} product={product}/>
    <ShowImages product={product} />

   </div>
  </div>
  );
}