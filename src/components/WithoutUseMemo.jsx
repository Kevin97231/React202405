import { useState } from "react"

export const WithoutUseMemo = () => {
  
  const [ numbers, setNumbers ] = useState([1,2,3,4,5])
  const [ inputValue, setInputValue ] = useState('')
  
  // Sommme de tous les nombres du tableau
  const sum = numbers.reduce((total, currentValue) => total + currentValue)

  console.log("Chargement du composant qui n'utilise pas le useMemo")

  const addNumbers = () => {
    setNumbers([...numbers, Math.random() * 10])
  }

    return (
    <>
     <h2>Composant sans useMemo</h2>
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