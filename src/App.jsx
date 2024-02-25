import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
