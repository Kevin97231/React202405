import { useParams } from "react-router-dom";
import { useAxiosOpti } from "../hooks/useAxiosOpti";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const { get, loading } = useAxiosOpti();

  useEffect(() => {
    // /dw_store/id
    get(`/dw_store/${id}`).then((response) => setProduct(response.data));
  }, []);

  return (
    <>
        {
            loading ? 
            // A la place de '<div>CHARGEMENT</div> ' , on pourrait utiliser un composant 'type' 
            // 'cahrgement' avec un spinner par exemple
            <div>CHARGEMENT</div> 
            : 
            <ProductCard product={product} />
        }
    </>

);
};
