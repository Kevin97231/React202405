import { useMemo, useState } from "react"

export const WithUseMemo = () => {
    const [ numbers, setNumbers ] = useState([1,2,3,4,5])
    const [ inputValue, setInputValue ] = useState('')

    const addNumbers = () => {
      setNumbers([...numbers, Math.random() * 10])
    }

    // Sommme de tous les nombres du tableau
    const sum = useMemo( () => {
        console.log("Calcul avec le useMemo")
        return numbers.reduce((total, currentValue) => total + currentValue)
    }, [numbers])

      return (
      <>
       <h2>Composant avec useMemo</h2>
       <p>Somme: {sum}</p>
       <button className="btn m-5" onClick={addNumbers}>Ajouter un nombre</button>
      <div>
          <input 
              type="text"
              className="mx-5 input input-bordered" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue}
      </div>
      </>
    );
}