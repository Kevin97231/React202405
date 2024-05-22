import { useState } from "react";

function HookUseState() {

    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        setCount( (prevValue) => prevValue + 1 )
    }

    const decrement = () => {
        // setCount(count - 1);
        setCount( (prevValue) => prevValue - 1)
    }

    return(
        <>
            <h1>Le hook useState</h1>
            <p>{count}</p>
            <button className="btn" onClick={increment}>Incrémenter</button>
            <button className="btn" onClick={decrement}>Décrémenter</button>
        </>
    )
}

export default HookUseState;