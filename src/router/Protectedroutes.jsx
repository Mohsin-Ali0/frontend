import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (props) => {
  let token = localStorage.getItem("token");
  let auth = { token: Boolean(token) };

  console.log("PROTECTED ROUTE", auth, token);
  if (auth.token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
