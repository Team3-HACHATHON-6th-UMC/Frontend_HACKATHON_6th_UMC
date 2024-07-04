import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Calander from "./screens/CalendarPage";
import Login from "./screens/Login";
import AddPlant from "./screens/AddPlant";
import NavBar from "./components/NavBar";

const App = () => {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cal" element={<Calander/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/add" element={<AddPlant/>} />
        </Routes>
      </Router>
  );
};

export default App;
