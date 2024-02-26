import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import { useState } from "react";
import Userpage from "./pages/Userpage";
import DataSubmitProvider from "./context/dataSubmitContext";
import LayoutDesignProvider from "./context/layoutDesignContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <DataSubmitProvider>
      <LayoutDesignProvider>
      <div className="w-screen h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Loginpage />} />
            {isLoggedIn ? (
              <Route path="/userpage/*" element={<Userpage />} />
            ) : (
              <Route path="/login" element={<Loginpage />} />
            )}
          </Routes>
        </Router>
      </div>
      </LayoutDesignProvider>
    </DataSubmitProvider>
  );
}

export default App;
