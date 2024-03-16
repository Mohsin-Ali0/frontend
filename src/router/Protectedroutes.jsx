import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (props) => {
  //   let role = JSON.parse(localStorage.getItem("_user"));
  let token = localStorage.getItem("token");
  let auth = { token: Boolean(token) };

  return <Outlet />;
  if (auth.token) {
    // if (props.roles.includes(role.role)) {
    return <Outlet />;
    // } else {
    //   return <Navigate to="/" />;
    // }
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
