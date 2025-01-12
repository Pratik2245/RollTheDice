import HomeComponent from "./components/HomeComponent";
import { Routes, Route } from "react-router-dom";
import "typeface-poppins";
import GamePage from "./components/GamePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/playGame" element={<GamePage />} />
        {/* <Route path="/" element={<HomeComponent />} /> */}
        {/* <Route path="/" element={<HomeComponent />} /> */}
      </Routes>
    </>
  );
}

export default App;
