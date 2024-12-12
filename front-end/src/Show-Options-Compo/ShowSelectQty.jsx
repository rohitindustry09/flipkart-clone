import ShowQuentity from './ShowQuentity.jsx';
export default function ShowSelectQty() {
  return (
   <select name="qty" className="card">
     <ShowQuentity value="1" title="Qty: 1" />
     <ShowQuentity value="2" title="Qty: 2" />
     <ShowQuentity value="3" title="Qty: 3" />
   </select>
  );
}