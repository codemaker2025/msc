import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Dashboard from "./components/Home/Dashboard.jsx";
import Navbar from "./components/navigation/Navbar";
import EmpList from "./components/Home/EmpList.jsx";
import ProtectedRoute from "./components/utils/ProtectedRoute.jsx"; // Import the ProtectedRoute component

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/test"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />{" "}
        {/* Protect this route */}
        <Route
          path="/employees/:id"
          element={
            <ProtectedRoute>
              <EmpList />
            </ProtectedRoute>
          }
        />{" "}
        {/* Protect this route */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}
