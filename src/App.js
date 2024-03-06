import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router";
import './assets/fonts/clash-display.css'
function App() {
  return (
    <BrowserRouter  >
      <UserRouter  />
    </BrowserRouter>
  );
}

export default App;
