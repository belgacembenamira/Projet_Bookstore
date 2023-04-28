/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 11/04/2023 - 21:34:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { Link, useNavigate } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();


  // Form Submit Handler
  // const formSubmitHandler = (event) => {
  //   event.preventDefault();

  //   if (email.trim() === "") {
  //     return toast.error("Email is required");
  //   }

  //   if (password.trim() === "") {
  //     return toast.error("Password is required");
  //   }

  //   // Send login data to the server
  //   axios.post("http://localhost:3000/login", {
  //     email,
  //     password,
  //   })
  //     .then(() => {
  //       // Redirect to the /offre route
  //        Navigate('./offre.jsx')

  //     })
  //     .catch((error) => {
  //       // Display error message
  //       toast.error(error.message);
  //     });
  // };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    // Send login data to the server
    axios.post("http://localhost:5000/login", {
      email,
      password,
    })
      .then(() => {
        // Redirect to the /offre route
        Navigate('/offre');
      })
      .catch((error) => {
        // Display error message
        toast.error(error.message);
      });
  };

  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Dont't have an account ?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;