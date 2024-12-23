import "./App.css";
import DateTime from "./components/datetime";
import Description from "./components/description";
import Title from "./components/title";

function App() {
  return (
    <div
      className="card text-bg-info mb-3 text-center"
      style={{ maxWidth: "28rem", marginInline: "auto" }}
    >
      <div className="card-body">
        <Title></Title>
        <Description></Description>
        <DateTime></DateTime>
      </div>
    </div>
  );
}

export default App;
