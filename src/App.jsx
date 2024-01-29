

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";


import Loginpage
 from "./pages/Loginpage";
 import { useState } from "react";
import Userpage from "./pages/Userpage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Loginpage/>}/>
          {
            isLoggedIn?(
              <Route path="/userpage/*" element={<Userpage/>}/>
            ):(
              <Route path="/login" element={<Loginpage/>}/> 
            )
          }      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
