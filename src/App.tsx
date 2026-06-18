import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App w-dvw h-svh bg-black">
      <Navbar />
      <div className="flex flex-col w-full h-[calc(100vh-4.5rem)] overflow-auto snap-y snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-[#ff4c4c]/80 scrollbar-track-transparent scrollbar-thumb-rounded-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
