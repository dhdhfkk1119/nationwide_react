import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "./routes/routeConfig.jsx"; 
import "./styles/app.css";
import "./styles/normalize.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <Routes>
        {routeConfig.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
      
      <Footer />
    </div>
  );
}

