/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 11/04/2023 - 12:10:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// import crypto from 'crypto-browserify';

import { Link, useNavigate } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (username.trim() === "") {
      return toast.error("Username is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    // Send data to the server
    axios.post("http://localhost:3000/register", {
      email,
      username,
      password,
    })
      .then(() => {
        // Display success message
        toast.success("Registration successful!");
        setEmail("");
        setPassword("");
        setUsername("");
        navigate('/login');
      })
      .catch((error) => {
        // Display error message
        toast.error(error.message);
      });
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Create new account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account ?{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;