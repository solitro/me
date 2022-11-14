import "../Styles/headerStyle.css";
import About from "../pages/About";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { useState } from "react";

function Page(props) {
  switch (props.index) {
    case 0:
      document.getElementById("home").className = "active";
      document.getElementById("about").className = "";
      document.getElementById("resume").className = "";
      document.getElementById("contact").className = "";
      return <Home />;
    case 1:
      document.getElementById("home").className = "";
      document.getElementById("about").className = "active";
      document.getElementById("resume").className = "";
      document.getElementById("contact").className = "";
      return <About />;
    case 2:
      document.getElementById("home").className = "";
      document.getElementById("about").className = "";
      document.getElementById("resume").className = "active";
      document.getElementById("contact").className = "";
      return <Resume />;
    case 3:
      document.getElementById("home").className = "";
      document.getElementById("about").className = "";
      document.getElementById("resume").className = "";
      document.getElementById("contact").className = "active";
      return <Contact />;
    default:
      return <div>404</div>;
  }
}

function Header() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <ul id="header">
        <li id="home" onClick={() => setIndex(0)}>
          Home
        </li>
        <li id="about" onClick={() => setIndex(1)}>
          About
        </li>
        <li id="resume" onClick={() => setIndex(2)}>
          Resume
        </li>
        <li id="contact" onClick={() => setIndex(3)}>
          Contact
        </li>
      </ul>
      <Page index={index} />
    </div>
  );
}

export default Header;
