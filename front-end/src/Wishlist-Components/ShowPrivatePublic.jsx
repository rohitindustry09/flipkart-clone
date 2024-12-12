import GetPrivate_Public from './GetPrivate_Public.jsx'
export default function ShowPrivatePublic({ TabTitle, product }) {
  return (
   <div className="wishlist-private-and-name">
    <h3> {TabTitle} </h3>
    <GetPrivate_Public
     TabTitle={TabTitle} 
     product={product} 
    />
  </div>
  );
}