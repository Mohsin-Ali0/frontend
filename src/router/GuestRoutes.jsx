import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  let token = localStorage.getItem("token");
  let auth = { token: Boolean(token) };
  return auth.token ? <Navigate to="/" /> : <Outlet />;
  // return <Navigate to="/" />;
};

export default GuestRoutes;
