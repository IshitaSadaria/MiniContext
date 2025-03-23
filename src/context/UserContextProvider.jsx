import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}} >
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


//Notes
/* 
- The UserContextProvider component is a wrapper for the UserContext.Provider component.
- The UserContextProvider component receives a children prop and returns the UserContext.
Provider component with the value prop set to an object with the user and setUser properties.
- The user and setUser properties are set using the useState hook.

*/