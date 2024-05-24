import { HeaderItem } from "./HeaderItem";

// Pour plus de performance, il est conseillé d'utilisé les 'Link' de react-router-dom,
// plutôt que les liens <a></a> comme en HMTL / CSS classique

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/use-state">Hook useState</a>
            </li>
            <li>
              <a href="/flux">Flux</a>
            </li>
            <li>
              <a href="/formulaire">Formulaire</a>
            </li>
            <li>
              <a href="/exercice">Exercice</a>
            </li>
            <li>
              <a href="/use-effect">Hook useEffect</a>
            </li>
            <li>
              <a href="/cycle-de-vie">Cycle de vie</a>
            </li>
            <li>
              <a href="/requettes-api">Requêtes API</a>
            </li>
            <li>
              <a href="/hook-personnalise">Hook personnalisé</a>
            </li>
            <li>
              <a href="/exercice-api">Exercice API</a>
            </li>
            <li>
              <a href="/use-memo">Hook useMemo</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <HeaderItem href={"/"}>Accueil</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/use-state"}>Use State</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/flux"}>Flux</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/formulaire"}>Formulaire</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/exercice"}>Exercice</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/use-effect"}>Hook useEffect</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/cycle-de-vie"}>Cycle de vie</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/requettes-api"}>Requêtes API</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/hook-personnalise"}>
              Hook personnalisé
            </HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/exercice-api"}>Exercice API</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/use-memo"}>Hook useMemo</HeaderItem>
          </li>
          <li>
            <HeaderItem href={"/dawan-store"}>Dawan store</HeaderItem>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
