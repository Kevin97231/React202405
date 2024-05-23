/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

function HookUseEffect () {
    
    const [count, setCount] = useState(0)
    
    useEffect( () => {
        console.log(`Effet secondaire déclenché !`)
        document.title = `count: ${count}`
    },[count]);

    return(
        <>
            <h1>Le hook use Effect</h1>
            <ul>
                Le hook useEffect est utilisé (entre autres)
                <li>
                    Pour gérer les effets secondaires
                </li>
                <li>
                    Pour effectuer des opérations après le rendu du composant (comme des appels API, la manipulation du DOM, gestion d'abonnements etc .)
                </li>
            </ul>
            <p>Très souvent, on utilise le hook useEffect() en conjonction avec un useState() pour gérer des effets secondaires à un changement d'état</p>
       
       <h2 className="border-t mt-5">Exemple: </h2>
       <div className="flex">
            <p className="pt-3 pr-2">
                Count = {count}
            </p>
            <button className="btn" onClick={() => setCount(prev => prev + 1)} >Increment</button>
       </div>
        </>
    )
}

export default HookUseEffect;