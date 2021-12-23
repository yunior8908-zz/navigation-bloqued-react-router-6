import { Link, Route, Routes } from "react-router-dom";
import BrowserRouter from "./browser-router";
import Index from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">index</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<div>home</div>} />
          <Route path="/dashboard" element={<div>dashboard</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
