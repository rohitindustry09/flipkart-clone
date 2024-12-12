export default function CardItemRow({ CardTitle }) {
  return (
<div className="col-md-10 hover-me-card-row" style={{ boxShadow: '1px 1px 5px black' }}>
<div className="card" style={{ border: 'none'}}>
  <div className="card-body">
    <h5 className="card-title row-card-title">{CardTitle}</h5>
    <p className="card-text row-card-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
</div>
  );
}