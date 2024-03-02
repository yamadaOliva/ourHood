import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.scss";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
    </Routes>
  </BrowserRouter>
);
