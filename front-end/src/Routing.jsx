import { BrowserRouter, Link } from 'react-router-dom'
export default function Routing() {
  return (
    <div>
      <ul>
        <BrowserRouter>

           <Link to="/home"> Home </Link>
        </BrowserRouter>
      </ul>
    </div>
  );
}