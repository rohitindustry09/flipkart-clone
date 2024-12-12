import { Navigate, Outlet } from 'react-router-dom';
export default function PrivateRoute() {
  let user = localStorage.getItem('user');
  return  user ? <Navigate to="/"/> : <Outlet />;
}