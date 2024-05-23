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
    

      return(
        <>
            <h1>Correction</h1>
            <ListProduct products={fruits} title='Liste des fruits'/>
            <ListProduct products={Vegetables} title='Liste des légumes'/>
        </>
      )

}

export default Correction