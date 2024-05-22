import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function Formulaire () {
    
    const [name, setName] = useState("");
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return(
        <>
            <h1>Les formulaires</h1>

             <h2>Les champs contrôlés </h2>
             <p>
                En react, nous un concept que nous pouvons appeler les 'champs contrôlés'.
                En utilisant le <strong>'onChange'</strong> d'une input et le hook useState()
                Ainsi, nous pouvons mettre à jour une vairable lié à l'input à chaque changement (donc à cahque fois 
                s'un caractère est ajouté ou supprimé)             
            </p>

            <div className="p-5 mt-5 border mb-10 w-fit">
                <p>Bonjour, {name}</p>
                <input 
                    type="text" 
                    value={name}
                    onChange={handleNameChange}
                    className="input-bordered"
                />
            </div>

        </>
    )
}

export default Formulaire