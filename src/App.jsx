import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { CartProvider } from "./pages/Home/Context";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
