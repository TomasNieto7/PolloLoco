import {Route, BrowserRouter as Router, Routes} from "react-router-dom" 
import Login from "./pages/login/Login.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
