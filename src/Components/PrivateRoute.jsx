import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
function PrivateRoute(){
    const {isAuthenticated}=useContext(AuthContext);
    // if user is not verified
    if(!isAuthenticated){
        return<Navigate to="/login"/>;
    }
    return<Outlet/>;
}
export default PrivateRoute;