import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router";
import "./assets/fonts/clash-display.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// In a CSS file
import "swiper/css";

function App() {
  return (
    <BrowserRouter>
      <UserRouter />
    </BrowserRouter>
  );
}

export default App;
