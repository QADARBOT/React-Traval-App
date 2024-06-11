import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contect from "./pages/Contect";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/servic" exact element={<Service />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contect" exact element={<Contect />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
