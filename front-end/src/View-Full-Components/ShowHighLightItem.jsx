export default function ShowHighLightItem({ itemIcon, itemName, itemTitle, itemText }) {
  return (
  <div className="item-highlights curve-the-parent">
    <i style={{ fontSize: '1.8rem', color: '#b7b7b7'}} class={itemIcon}></i>
      
    <div className="item-highlights-texts">
     <h5 style={{ fontSize: ''}}>{itemName}</h5>
     <h6>{itemTitle}</h6>
     <span>{itemText}</span>
    </div>
  </div>
  );
}