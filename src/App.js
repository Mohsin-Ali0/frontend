import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import "sweetalert2/dist/sweetalert2.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme
      baseColor="#73baf0"
      highlightColor="#f7fafc"
      // customHighlightBackground="linear-gradient(90deg,rgb(48, 45, 80) 25%,rgb(68, 117, 250) 75%)"
    >
      <Router>
        <Routes>
          {/* Routes for Client Side */}
          <Route path="/*" element={<UserRouter />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
