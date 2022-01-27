import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prova from "./components/Prova";
import AuthenticationPage from "./components/AuthPage"
import Navigation from "./components/Nav";
import LoginPage from "./components/Login";

function App() {
    return(
        <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Prova />} />
          <Route path="/auth" element={<AuthenticationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
