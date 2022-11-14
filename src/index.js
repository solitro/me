import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
