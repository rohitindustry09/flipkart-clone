import './Logout.css'
import { useNavigate } from 'react-router-dom';
export default function Logout() {
  let navigate = useNavigate();
  
  function handleBack() {
    navigate('/');
  }
  function handlLogout() {
    localStorage.removeItem('user');
    window.location.reload();
     navigate('/');
  }
  return (
    <>
    <div className="LogoutParent">
      <h1> Are sure about to Logout? </h1>
      <div className="btn-parent-logout">
         <button className="btn-query" onClick={handleBack}> 
          No, Go Back
         </button>
         <button className="btn-query" onClick={handlLogout}> 
          Yes Logout
         </button>
      </div>
    </div>
    </>
  );
}