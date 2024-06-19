import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Homepage from "./pages/Homepage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
