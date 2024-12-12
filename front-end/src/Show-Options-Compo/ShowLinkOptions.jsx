export default function ShowLinkOptions({ title, link }) {
  return (
  <li className="nav-item" style={{padding: '1rem 0rem'}}>
   <a className="nav-link" style={{ border: 'none', color: 'black' }} href={link}>{title}</a>
  </li>
  );
}