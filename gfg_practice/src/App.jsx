import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Navbar = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "0px",
        backgroundColor: "#41d1ff",
      }}
    >
      <h1>
        <a>Home</a>
        <a>Products</a>
        <a>Services</a>
        <a>About Us</a>
        <a>Contact Us</a>
      </h1>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div style={{ textAlign: "center", marginLeft: "0px", width: "25%" }}>
      <h1>This is Sidebar.</h1>
    </div>
  );
};

// Body Component
const Body = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ textAlign: "justify", marginRight: "0px", width: "75%" }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Sidebar />
    </>
  );
}

export default App;
