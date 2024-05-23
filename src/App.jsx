/* eslint-disable react/no-unescaped-entities */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import Navbar from "./components/Navbar";
import HookUseState from "./view/HookUseState";
import Flux from "./view/Flux";
import Formulaire from "./view/Formulaire";
import { Exercice } from "./view/Exercice";
import HookUseEffect from "./view/HookUseEffect";
import LifeCycle from "./view/LifeCycle";

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
              <Route path="/use-state" element={<HookUseState/>} />
              <Route path="/flux" element={<Flux/>}/>
              <Route path='/formulaire' element={<Formulaire/>} />
              <Route path='/exercice' element={<Exercice/>} />
              <Route path='/use-effect' element={<HookUseEffect/>} />
              <Route path='/cycle-de-vie' element={<LifeCycle/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
