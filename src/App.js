import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import useToken from "./components/useToken";

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            {" "}
            <Link to="/preferences">Preferences</Link>
          </li>
        </ul>
      </nav>
      <h1>Application</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  );
};

export default App;
