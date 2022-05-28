import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from "./layouts/navbar";
import Header from "./layouts/header";
import Banner from "./layouts/banner";
import TopCards from "./components/topCards";
import Footer from "./layouts/footer";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Banner />
        <TopCards />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
