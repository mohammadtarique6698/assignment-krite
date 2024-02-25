import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
