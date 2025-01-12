import HomeComponent from "./components/HomeComponent";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "typeface-poppins";
import GamePage from "./components/GamePage";

function App() {
  return (
    <>
      <ToastContainer />
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
