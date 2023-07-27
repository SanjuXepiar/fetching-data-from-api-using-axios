import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [catFact, setCatfact] = useState("");
  const fethchCatfact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  }, []);
  return (
    <div className="App">
      <button onClick={fethchCatfact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
