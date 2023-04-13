/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 12/04/2023 - 01:11:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
    * @description      : 
    * @created          : 12/04/2023 - 00:45:15
    * @lastModified     : 12/04/2023 - 01:30:00
    * @version          : 1.1.0
**/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import BookPage from "./pages/book/BookPage";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import HomePage from "./pages/home/HomePage";
import Offre from "./pages/forms/offre";
import Commande from "./pages/cart/commande";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offre" element={<Offre />} />
        <Route path="/commande" element={<Commande />} />
        {/* {isLoggedIn && <Route path="/offre" element={<Offre />} />} */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
