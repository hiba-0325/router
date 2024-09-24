import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <nav>
        {" "}
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/home"> Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/register"> Register</Link>{" "}
        </li>
      </nav>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
