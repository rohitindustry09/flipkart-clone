import FontIcon from '../Icons-Set/FontIcon.jsx';
import FontIconName from '../Icons-Set/FontIconName.jsx';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function ShowOptions({ Icon, Name, path }) {
  function getName(name) {
    return name
        .replace(/\s+/g, '') // Remove spaces
        .charAt(0).toLowerCase() + name.replace(/\s+/g, '').slice(1); // Lowercase first letter
  }
  return (
    <NavDropdown.Item as={Link} 
      to={getName(Name)} >
      <FontIcon icon={Icon} />
      <FontIconName name={Name} />
    </NavDropdown.Item>
  );
}
