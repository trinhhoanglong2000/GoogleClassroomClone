import React from "react";
import { Header, ClassesContent, Login, Register, ClassDetail, People } from "./components";

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
        <Route path="/ClassDetail" element={<ClassDetail />} />
        <Route path="/ClassDetail/People" element={<People />} />
        <Route path="/ClassDetail/Classwork" element={<People />} />
        <Route path="/AccessInviteLink" element={<AccessLink  open={null} onClose={null} />} />
      </Routes>
    </Router>
  );
}

export default App;
