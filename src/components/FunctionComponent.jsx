import { useEffect, useState } from "react";

function FunctionComponent () {
   
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Composant mounted')
        
        return () => {
            console.log('return du useEffect !')
        }

    }, [])

    return (
        <div>
            <h1>Function component</h1>
            <p>Je suis le composant fonction !</p>
            <div className='flex w-fit borderp-2 m-5'>
                <p className="pr-5">
                    Count: {count}
                </p>
                <button className="btn btn-primary" onClick={() => setCount(prev => prev - 1)}>+</button>
            </div>
        </div>
    )
}

export default FunctionComponent;