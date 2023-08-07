import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./component/Home/Home";
import Login from "./component/login/login";
import About from "./component/About/about";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
