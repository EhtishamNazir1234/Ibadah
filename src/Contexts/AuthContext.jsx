import React, { useState, useEffect, createContext } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role,setRole]=useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole=localStorage.getItem("role");
    if (token) {
      setIsAuthenticated(true);
      setRole(userRole);
    }
  },[]);
//   login func
const login=(token,userRole)=>{
    localStorage.setItem("token",token);
    localStorage.setItem("role",userRole);
    setIsAuthenticated(true);
    setRole(userRole)

};
// logout function
const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setRole(null);
};
return(
    <AuthContext.Provider value={{isAuthenticated,role,login,logout}}>
        {children}
    </AuthContext.Provider>
)
};
