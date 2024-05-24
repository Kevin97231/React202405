import { useState } from "react";
import { FormProduct } from "./FormProduct";
import { Modal } from "./Modal";

/* eslint-disable react/prop-types */
export const Table = ({ data = [], removeFunction, updateFunction }) => {
  // Je considère que touts les objets que j'affiche avec ce composant auront une propriété 'id' .

  let cles = [];

  // Je rentre dans le 'if' si mon talbeau n'est pas vide (la valeur par défaut de data étant '[]')
  if (data.length > 0) {
    // Object.keys(myObject)  -> renvoie une liste contenant l'ensmeble des clé de 'myObject'
    cles = Object.keys(data[0]);
  }

  const [productToModify, setProductToModify] = useState({})

  const handleUpdate = (product) => {
    setProductToModify(product)
    
    // Pour ouvrir le modal
    document.getElementById("my_modal").showModal()
  }

  const closeModal = () => {
    document.getElementById("my_modal").close()
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-4/6">
        <thead>
          <tr>
            {/* On parcours notre tableau de clés pour déterminé le nom de nos colonnes*/}
            {cles.map((cle) => (
              <th key={cle}>{cle}</th>
            ))}
            <th>Modifier / Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              {
              cles.map((cle) => (
                <td key={cle}>{product[cle]}</td>
              ))
              }
              <td>
                <button 
                  className="mr-5 btn btn-error" 
                  onClick = {() => removeFunction(product)}
                >Supprimer</button>
                <button
                  className="mr-5 btn btn-warning"
                  onClick={() => handleUpdate(product)}
                >Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal content={<FormProduct submitMethod={updateFunction} productToModify={productToModify} closeModal={closeModal} />} />
    </div>
  );
};
