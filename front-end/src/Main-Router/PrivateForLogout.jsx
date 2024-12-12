import { Navigate, Outlet } from 'react-router-dom';
export default function PrivateLogout() {
  let user = localStorage.getItem('user');
  return  !user ? <Navigate to="/"/> : <Outlet />;
}