import Userpage from "./pages/Userpage";
import Loginpage from "./pages/Loginpage";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-black">
      <Router>
        <Routes>
          <Route index path="/" element={<Loginpage />} />
          {isLoggedIn ? (
            <Route path="/user" element={<Userpage />} />
          ) : (
            <Route path="/user" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
