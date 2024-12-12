import Nav from 'react-bootstrap/Nav'; 
export default function NavLink() {
  let navTabs = {
    cards: "bi bi-cart4",
    orders: "bi bi-shop-window",
    //"bi bi-three-dots-vertical"
  };

  return (
    <>
      {Object.entries(navTabs).map(([key, value], index) => 
         <Nav.Link href={key} key={index} className="me-1">
           <i className={value}></i>
         </Nav.Link>
      )}
    </>
  );
}
