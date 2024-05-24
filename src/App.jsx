/* eslint-disable react/no-unescaped-entities */

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import Navbar from "./components/Navbar";
import HookUseState from "./view/HookUseState";
import Flux from "./view/Flux";
import Formulaire from "./view/Formulaire";
import { Exercice } from "./view/Exercice";
import HookUseEffect from "./view/HookUseEffect";
import LifeCycle from "./view/LifeCycle";
import { RequestApi } from "./view/RequestApi";
import { CustomHook } from "./view/CustomHook";
import { ExerciceAPI } from "./view/ExerciceAPI";
import { HookUseMemo } from "./view/HookUseMemo";
import { PageNotFound } from "./view/PageNotFound";
import { DawanStore } from "./view/DawanStore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <PageNotFound/>,
      children: [
        {
          path: "",
          element: <>Page d'accueil</>,
        },
        {
          path: "/jsx",
          element: <JsxTheorie />,
        },
        {
          path: "/use-state",
          element: <HookUseState />,
        },
        {
          path: "/flux",
          element: <Flux />,
        },
        {
          path: "/formulaire",
          element: <Formulaire />,
        },
        {
          path: "/exercice",
          element: <Exercice />,
        },
        {
          path: "/use-effect",
          element: <HookUseEffect />,
        },
        {
          path: "/cycle-de-vie",
          element: <LifeCycle />,
        },
        {
          path: "/requettes-api",
          element: <RequestApi />,
        },
        {
          path: "/hook-personnalise",
          element: <CustomHook />,
        },
        {
          path: "/exercice-api",
          element: <ExerciceAPI />,
        },
        {
          path: "/use-memo",
          element: <HookUseMemo />,
        },
        {
          path: "/dawan-store",
          element: <DawanStore />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        }
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <Navbar />

        <div className="app-container">
          <div className="app">

        {/* <Outlet/> est une balise qui appartient à la biblio. React-router-dom
        -> à la place de outlet s'affichera le composant lié à la route */}
        <Outlet />
          </div>
        </div>

      </>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Navbar />

//       <div className="app-container">
//         <div className="app">
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<h1>Page d'accueil</h1>} />
//               <Route path="/jsx" element={<JsxTheorie />} />
//               <Route path="/use-state" element={<HookUseState/>} />
//               <Route path="/flux" element={<Flux/>}/>
//               <Route path='/formulaire' element={<Formulaire/>} />
//               <Route path='/exercice' element={<Exercice/>} />
//               <Route path='/use-effect' element={<HookUseEffect/>} />
//               <Route path='/cycle-de-vie' element={<LifeCycle/>} />
//               <Route path='/requettes-api' element={<RequestApi/>} />
//               <Route path='/hook-personnalise' element={<CustomHook/>} />
//               <Route path='/exercice-api' element={<ExerciceAPI/>} />
//               <Route path='use-memo'  element={<HookUseMemo/>} />
//             </Routes>
//           </BrowserRouter>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
