import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  let token = localStorage.getItem("_token");
  let auth = { token: Boolean(token) };
  return auth.token ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoutes;
