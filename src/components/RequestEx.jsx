import axios from "axios";
import { useEffect, useState } from "react";

export const RequestEx = () => {
 
    const url = 'http://localhost:3001/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.get(url)
            .then( response => {
                console.log(response)
                setProducts(response.data)
            } )
            .catch( error => console.log(error.message) )
            .finally( () => console.log('Requête terminée !'))
        }
        fetchData()
    },[])

    const addProduct = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target)

        const newProduct = {
            category: formData.get('category'),
            name: formData.get('name'),
            number: formData.get('number'),
            price: formData.get('price')
        }

        console.log('formdata: ', formData)
        console.log('nouveau produit: ', newProduct)

        axios.post(url, newProduct)
            // Avec Json server, sur une requête POST, la réponse, si tout s'est bien passé, sera le nouveau produit
            .then( response => {
                console.log('response de Json server après le post: ', response)
                setProducts(prevValue => [...prevValue, response.data])
            })
            .catch(err => console.error(err.message))
    }


    return (
    <>
      {/* <h2>Exemple</h2> */}
      <div className="border m-5 p-5">
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Catégorie</th>
                </tr>
            </thead>
            <tbody>
            {
                products.map( product => 
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.number}</td>
                        <td>{product.category}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
      </div>
      <div className="py-10 border-t">
            <h2>Requête POST: </h2>
            <form onSubmit={addProduct} className="p-5 border">
                <div className="grid grid-cols-4 gap-4 mb-5">
                    <input 
                        type="text" 
                        placeholder="Nom du produit"
                        name='name'
                        className="flex input input-bordered"
                    />
                    <input 
                        type="number" 
                        placeholder="Quantité"
                        name='number'
                        className="flex input input-bordered"
                    />
                    <input 
                        type="number" 
                        placeholder="Prix"
                        name='price'
                        className="flex input input-bordered"
                    />
                    <input 
                        type="text" 
                        placeholder="Catégorie"
                        name='category'
                        className="flex input input-bordered"
                    />
                </div>
                <button type="submit" className="btn btn-outline btn-primary">Ajouter le nouveau produit</button>
            </form>
      </div>
    </>
  );
}