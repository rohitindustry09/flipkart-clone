export default function ItemViewer() {
  return (
 <div class="card ms-3 mt-3 p-0" style={{width: '10rem', height: '10rem'}}>
  <img src="/Flipkart/d97a608349a49c70.jpg" class="card-img-top" alt="image" style={{ height: '10rem', width: '10rem', objectFit: 'cover'}}/>
  <div class="card-body w-100 d-flex justify-content-center">
    <select name="qty" class="card">
      <option value="1">Qty: 1</option>
      <option value="2">Qty: 2</option>
      <option value="3">Qty: 3</option>
    </select>
  </div>
</div>
  );
}