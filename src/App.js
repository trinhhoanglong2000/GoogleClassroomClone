import React from "react";
import {
  Header,
  ClassesContent,
  Login,
  Register,
  ClassDetail,
  People,
  Classwork,
  ShowGrade,

} from "./components";

import { BrowserRouter as Router, Routes, Route,Outlet  } from "react-router-dom";
import SubHeader from "./components/ClassDetail/SubHeader/SubHeader";
import AccessLink from "./components/AcessLink";
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
        <Route path="/ShowGrade" element={<ShowGrade />} />
        <Route
          path="/ClassDetail"
          element={
            <>
              <Header />
              <SubHeader />
              <Outlet/>
            </>
          }
        >
          <Route path="/ClassDetail/:id" element={<ClassDetail />} />
          <Route path="/ClassDetail/:id/People" element={<People />} />
          <Route path="/ClassDetail/:id/Classwork" element={<Classwork />} />
          
        </Route>
        <Route
          path="/AccessInviteLink"
          element={<AccessLink open={null} onClose={null} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
