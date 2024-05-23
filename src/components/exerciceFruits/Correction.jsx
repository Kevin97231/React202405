import { useState } from "react";
import ListProduct from "./ListProduct";

function Correction () {
    
    const products = [
        { category: "Fruits", price: "$1", number: 0, name: "Banana" },
        { category: "Fruits", price: "$1", number: 2, name: "Mango" },
        { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
        { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
        { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
        { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
      ];

      const fruits = products.filter( product => product.category === 'Fruits' )
      const Vegetables = products.filter( product => product.category === 'Vegetables' )
    
      const [checked, setChecked] = useState(false)
      const [search, setSearch] = useState("")

      const handleCheckbox = () => {
        setChecked(!checked)
      }

      const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      return(
        <>
            <h1>Correction</h1>
            <div>
              Afficher hors stock
              <input 
                type="checkbox" 
                value={checked}
                onChange={handleCheckbox}
              />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
              />
            </div>
            <ListProduct products={fruits} title='Liste des fruits' afficherHorsStock={checked} search={search}/>
            <ListProduct products={Vegetables} title='Liste des légumes' afficherHorsStock={checked} search={search}/>
        </>
      )

}

export default Correction