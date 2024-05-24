import { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { useAxiosOpti } from "../hooks/useAxiosOpti";


export const DawanStore = () => {
  
    const { get } = useAxiosOpti()

    const [products, setProducts] = useState([])

    useEffect(() => {
        get("dw_store")
            .then(response => {
                setProducts(response.data)
            })
    },[])    

    return (
        
    <>
     <div className="w-full">
        <ProductList products={products}/>
     </div>
    </>
  );
}