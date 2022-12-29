import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Hotels from "./pages/hotelas/Hotels";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/hotels/:id" element={<Hotels />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
