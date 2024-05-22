/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

/* eslint-disable react/prop-types */
function Flux() {
  const data = [
    { id: 1, nom: "Produit 1", prix: 20.99, quantite: 5 },
    { id: 2, nom: "Produit 2", prix: 15.45, quantite: 10 },
    { id: 3, nom: "Produit 3", prix: 75.32, quantite: 58 },
    { id: 4, nom: "Produit 4", prix: 30.0, quantite: 25 },
    { id: 5, nom: "Produit 5", prix: 26.0, quantite: 16 },
  ];

  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1>Les flux de données</h1>

      <h2>De parents vers enfants:</h2>
      <p>
        Pour faire passer des données d'un composant parent vers le composant
        enfant, bous devons utiliser les 'props'
      </p>
      <ComposantEnfant text="Voici les données que je t'envoie " data={data} />
      <h2>De l'enfant vers son parent</h2>
      <p>
        En react, pour faire passer des données d'un composant enfant vers sont parents, il est courant d'utiliser des fonctions de rappel (callback function)
        passées en tant que props. On les utilisera ensuite dans l'enfant pour transmettre des données vers son parent
      </p>

        <CheckBoxEnfant checked={checked} onCheck={setChecked}/>

        <br/>
        { checked ? 'case cochée' : 'case non cochée'}


    </>
  );
}

function ComposantEnfant({ text = "Passe moi tes données !", data = [] }) {
  return (
    <>
      {text}

      {data.map((produit) => (
        <div key={produit.id} className="border py-5">
          <p>Nom: {produit.nom} </p>
          <p>Nom: {produit.prix} </p>
          <p>Nom: {produit.quantite} </p>
        </div>
      ))}
    </>
  );
}

function CheckBoxEnfant({checked, onCheck}){
   
    function click(e){
        onCheck(e.target.checked);
    }

    return(
        <>
            <label>
                <input
                 type="checkbox" 
                //  onChange = { (e) => onCheck(e.target.checked)}
                 onChange = {click}
                 checked={checked}
                 />
            </label>
        </>
    )
}


export default Flux;
