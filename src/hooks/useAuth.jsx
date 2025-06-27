import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";

const useAuth = () => {
  const [User, setUser] = useState();
  const [UserDetail, setUserDetail] = useState();
  useEffect(() => {
    let user = localStorage.getItem("token");
    console.log(user, "user IN AUTH");
    if (user) {
      setUser(user);
      setUserDetail(decodeToken(localStorage.getItem("token")));
    }
  }, []);

  // const setRoleData = (newRole) => {
  //   localStorage.setItem("token", JSON.stringify({ User: newRole }));
  //   setUser(newRole);
  // };


  const UpdateToken = (token) => {
    localStorage.setItem("token", token);
    setUser(token);
    setUserDetail(decodeToken(token));
  };

  const clearRole = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return {
    User,
    UserDetail,
    UpdateToken,
    // setRole: setRoleData,
    clearRole,
  };
};

export default useAuth;
