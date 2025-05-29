import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    if (window.hj) {
      window.hj("trigger", "show_ms_recommendation_survey"); // Use your actual Hotjar trigger name
    } else {
      console.warn("Hotjar not loaded yet");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hotjar Test!</p>
        <button onClick={handleClick}>
          Not interested in this recommended project
        </button>
      </header>
    </div>
  );
}

export default App;
