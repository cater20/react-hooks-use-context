import react from "react";


const UserContex= react.createContext();

function userProvider({children}){
    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
      };
return<UserContex.Provider value="null">{children}</UserContex.Provider>
}
export {UserContex,userProvider}