import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { decodeToken } from "react-jwt";

const ProtectedRoutes = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const googletoken = searchParams.get("token");
  const myDecodedToken = decodeToken(googletoken);
  console.log(myDecodedToken, "myDecodedToken");

  if (myDecodedToken) {
    localStorage.setItem("token", googletoken);
  }

  let token = localStorage.getItem("token");
  let auth = { token: Boolean(token) };

  if (auth.token || myDecodedToken) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
