import React, { useEffect,useState } from "react";
import { Header, SpeedDial,ClassesContent } from "./components";
import axios from "axios";

function App() {
  const [classes,setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => {
        console.log(res.data)
        setClasses(res.data)
      })
      .catch((error) => {
        
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <ClassesContent classes={classes}/>
      <SpeedDial />
    </div>
  );
}

export default App;
