import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { decodeToken } from "react-jwt";

const ProtectedRoutes = (props) => {
  const [searchParams] = useSearchParams();
  const location = useLocation(); // Get the current location
  const googletoken = searchParams.get("token");
  const myDecodedToken = decodeToken(googletoken);

  // If there is a Google token in the query parameters, save it in local storage
  if (myDecodedToken) {
    localStorage.setItem("token", googletoken);
  }

  let token = localStorage.getItem("token");
  let auth = { token: Boolean(token) };

  // If the user is authenticated, allow access to the route
  if (auth.token || myDecodedToken) {
    return <Outlet />;
  } else {
    // If not authenticated, redirect to the login page and save the original path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default ProtectedRoutes;
