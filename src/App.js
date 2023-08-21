import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import MenuPage from "./Components/MenuPage";
import NavPage from "./Components/Nav";
import Footer from "./Components/Footer";
import "./style.css";

function App() {
  return (
    <Router>
      
      <div className="container">

      {/* navigation bars */}
      <NavPage/>


        <Routes>

          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          
        </Routes>


        <Footer />


      </div>

    </Router>
  );
}

export default App;