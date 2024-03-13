import { useState, useEffect } from "react";

const useAuth = () => {
  const [role, setRole] = useState({});

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("_user"));
    if (user) {
      setRole(user);
    }
  }, []);

  const setRoleData = (newRole) => {
    localStorage.setItem("_user", JSON.stringify({ role: newRole }));
    setRole(newRole);
  };

  const clearRole = () => {
    localStorage.removeItem("_user");
    setRole(null);
  };

  return {
    role,
    setRole: setRoleData,
    clearRole,
  };
};

export default useAuth;
