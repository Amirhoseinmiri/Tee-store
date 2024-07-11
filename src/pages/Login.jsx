import React, { useState } from "react";
import { authenticateUser } from "../utils";

const Login = ({ setUser, setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const getUser = async () => {
      const res = await authenticateUser(email, password);
      // eslint-disable-next-line no-unused-expressions
      res ? (setUser(res), setIsLogged(true)) : setErrorMsg("have error here");

      console.log("RESPONS  E", res);
    };
    getUser();
  };
  return (
    <form onSubmit={handleLogin} className="login-form">
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="email" className="login-label">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-inp"
        placeholder="Email"
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-inp"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
