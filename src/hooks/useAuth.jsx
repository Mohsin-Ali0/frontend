import { useState, useEffect } from "react";

const useAuth = () => {
  const [User, setUser] = useState();

  useEffect(() => {
    let user = localStorage.getItem("token");
    console.log(user,"USE AUTH LOG")
    if (user) {
      setUser(user);
    }
  }, []);

  // const setRoleData = (newRole) => {
  //   localStorage.setItem("token", JSON.stringify({ User: newRole }));
  //   setUser(newRole);
  // };

  const clearRole = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return {
    User,
    // setRole: setRoleData,
    clearRole,
  };
};

export default useAuth;
