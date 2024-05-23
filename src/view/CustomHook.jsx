// import { useToggle } from "../hooks/useToggle";

import { useIncrement } from "../hooks/useIncrement.jsx";
import { useToggle } from "../hooks/useToggle.js";

export const CustomHook = () => {
  const [checked, toggleChecked] = useToggle();

//   Exemple quand le retour est un tableau 
//   const [count, increment, decrement] = useIncrement({min: 0, max: 5})

    const { count, increment, decrement } = useIncrement({min: 0, max: 5})

  return (
    <>
      <h1>Les hooks personnalisés</h1>

      <p className="pb-2">
        <strong>
          <a href="https://usehooks.com/"></a>
        </strong>
      </p>

      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react on peut souvent avoir besoin de faire varier une
        valeur entre vrai et faux (par exemple: afficher / masquer ) Pour cela,
        on peut se mettre en place un hook personnalisé
      </p>

      <input 
        type="checkbox" 
        checked={checked} 
        onChange={toggleChecked} 
      />
      <p> {checked && "je suis coché"} </p>

      <h2>Cas de figure n°2</h2>
        <p>
            Je veux créer un hook personnalisé pour gérer un compteur
        </p>

        {count}
        <button className='btn' onClick={increment}>+</button>
        <button className='btn' onClick={decrement}>-</button>
        
    </>
  );
};
