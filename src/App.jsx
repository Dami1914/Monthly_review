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
import LayoutDesignProvider, {
  HandleLayoutDesign,
} from "./context/layoutDesignContext";
import GeneralStateProvider from "./context/generalStateContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { mode } = HandleLayoutDesign();
  console.log(mode);
  return (
    <DataSubmitProvider>
      <GeneralStateProvider>
        <div
          
          className="max-w-screen max-h-screen h-screen min-h-[500px]"
        >
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
      </GeneralStateProvider>
    </DataSubmitProvider>
  );
}

export default App;
