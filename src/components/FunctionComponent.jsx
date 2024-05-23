import { useEffect, useState } from "react";

function FunctionComponent () {
   
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Ci-dessous ce qui sera exécuté au montage du composant.
        // Sera exécuté uniquement au montage car le tableau de dépendance est vide
        console.log('Composant mounted')
        
        // Dans le return, la fonction appelé au démontage du composant
        return () => {
            console.log('return du useEffect !')
        }

    }, []) // Le tableau de dépendance du useEffect est vide

    return (
        <div>
            <h1>Function component</h1>
            <p>Je suis le composant fonction !</p>
            <div className='flex w-fit borderp-2 m-5'>
                <p className="pr-5">
                    Count: {count}
                </p>
                <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>+</button>
            </div>
        </div>
    )
}

export default FunctionComponent;