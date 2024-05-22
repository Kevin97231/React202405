/* eslint-disable react/no-unescaped-entities */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-container">
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<h1>Page d'accueil</h1>} />
              <Route path="/jsx" element={<JsxTheorie />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
