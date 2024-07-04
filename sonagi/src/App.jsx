import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import CalenderPage from "./screens/CalendarPage";
import Login from "./screens/Login";
import AddPlant from "./screens/AddPlant";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cal" element={<CalenderPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddPlant />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
