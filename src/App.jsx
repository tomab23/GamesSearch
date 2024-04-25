
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollPage from "./helpers/ScrollPage";
import SearchPage from "./pages/SearchPage";
import GamePage from "./pages/GamePage";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  },[])

  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <ScrollPage/>
    </BrowserRouter>
  );
}

export default App;
