import React, { useContext, useState, userContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password});
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
};

export default Login;


//Notes
/* 
- The login component uses the useState and useContext hooks to manage the state and context.
- The login component renders a form with input fields for the username and password.
- The login component uses the setUser function from the UserContext to update the user context with the
username and password entered by the user.
- The handleSubmit function is called when the user clicks the login button and prevents the default form
submission behavior. It then calls the setUser function with the username and password entered by the user.
- The login component is exported as the default export.
- Here the data is being passed/send to the context using the setUser function.
- The setUser function is used to update the user context with the username and password entered by the user
*/