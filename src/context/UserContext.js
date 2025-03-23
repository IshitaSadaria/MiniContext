import React from "react";

const UserContext = React.createContext();

export default UserContext;









// Context is the provider here is the UserProvider
//Notes 

/*
- Context provides a way to pass data through the component tree 
without having to pass props down manually at every level.
- Context is primarily used when some data needs to be accessible by many components at different nesting levels.
- Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
- Context is a way to share values between components without having to explicitly pass a prop through every level of the tree.
*/