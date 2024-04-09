import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (props) => {
  // let tokenCookie = Cookies.get("token");

  const [cookies] = useCookies(["token"]);
  console.log(cookies.token, "tokenCookie");
  let token = localStorage.getItem("token");
  let auth = { token: Boolean(token) };

  if (auth.token || cookies.token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
