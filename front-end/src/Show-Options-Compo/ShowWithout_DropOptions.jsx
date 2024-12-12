import { Link } from "react-router-dom";
export default function ShowOptions({ classFor, icon, title, color, titleStyle , IconStyle, navigateTo="/" }) {
  let styles = {
    background: `linear-gradient(to right, white 95%, ${color} 5%)`
  }
  return (
    <div className={classFor} style={ classFor === "user-icons orders" ? styles: {}} >
     <Link to={navigateTo} style={{ textDecoration: 'none'}}>
       <i className={icon} style={IconStyle}></i>
       <span style={titleStyle}> {title} </span>
     </Link>
    </div>
  );
}