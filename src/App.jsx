
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollPage from "./helpers/ScrollPage";

function App() {
  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollPage/>
    </BrowserRouter>
  );
}

export default App;
