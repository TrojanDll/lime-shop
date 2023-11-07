import "./variables.css";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
