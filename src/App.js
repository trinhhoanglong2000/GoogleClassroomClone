import React, { useEffect } from "react";
import { Header, SpeedDial,Content } from "./components";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => console.log(res.data))
      .catch((error) => {
        
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Content/>
      <SpeedDial />
    </div>
  );
}

export default App;
