import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { store } from "./ReduxSetup/store.js";
import { useSelector } from "react-redux";
import HomePage from "./Routes/HomePage.jsx";

function App() {
  const admin = useSelector((store) => store.admin.admin);

  return (
    <div className="w-full flex flex-col min-h-[100vh] h-fit  items-center justify-start relative">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={admin !== null ? <HomePage /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
