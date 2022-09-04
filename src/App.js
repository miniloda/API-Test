import './App.css';
import NavBar from "./NavBar"
import {useState, useEffect} from "react";
function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    console.log(screenSize)
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize]);

  return (
    <div className="App">
      <NavBar screenSize = {screenSize}/>
    </div>
  );
}

export default App;
