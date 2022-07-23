import react from "react";
import React from "react";

const UserContex= react.createContext();

function userProvider({children}){
return<UserContex.Provider value="null">{children}</UserContex.Provider>
}
export {UserContex,userProvider}