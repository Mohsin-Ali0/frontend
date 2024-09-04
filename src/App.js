import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminRouter } from "./router/AdminRouter";
import UserRouter from "./router/UserRouter";
import "sweetalert2/dist/sweetalert2.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Admin Panel */}
        <Route path="/user/*" element={<AdminRouter />} />

        {/* Routes for Client Side */}
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
