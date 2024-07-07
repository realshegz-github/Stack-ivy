import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import ScrollToTop from "./ScrollToTop";
import ScrollToHashElement from "./ScrollToHash";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import Interest from "./pages/Interest";

function App() {
  return (
    <div className="w-full ">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interest" element={<Interest />} />
          {/* <Route path="*" element={<Nopage />} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
