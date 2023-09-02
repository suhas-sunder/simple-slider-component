import { useState } from "react";
import "./App.css";

function App() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Slider</h1>
      <label htmlFor="slider">Current value: {sliderValue}</label>
      <input
        id="slider"
        type="range"
        min="0"
        max="100"
        step="5"
        onChange={handleChange}
        defaultValue={0}
      />
    </div>
  );
}

export default App;
