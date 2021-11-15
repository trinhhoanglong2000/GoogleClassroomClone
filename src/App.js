import React from "react";
import { Header, ClassesContent, Login, Register } from "./components";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AccessLink  from "./components/AcessLink";
function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            
            <>
              <Header />
              <ClassesContent />
            </>
            

          }
        ></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AccessLink" element={<AccessLink  open={null} onClose={null} />} />
      </Routes>
    </Router>
  );
}

export default App;
