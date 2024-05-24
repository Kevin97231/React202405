import { useEffect, useState } from "react";
import { Consigne } from "../components/ExerciceAPI/Consigne";
import { Table } from "../components/ExerciceAPI/Table";
import { useAxios } from "../hooks/useAxios";

export const ExerciceAPI = () => {
  const { get, remove, put } = useAxios();

  const [products, setProducts] = useState();

  useEffect(() => {
    console.log("Requête en cours");
    get().then((response) => {
      console.log(response);
      setProducts(response);
    });
  }, []);

  const handleRemoveProduct = (product) => {
    console.log("Product à supprimer", product);
    remove(product.id)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter(
            (productFilter) => product.id !== productFilter.id
          )
        );
      })
      .catch((error) =>
        console.error("Erreur dans la suppression du produit", error.message)
      );
  };

  const updateProduct = (id, data) => {
    put(id, data)
      // le 'response' est la réponse de mon Json server -> dans mon cas il renvoie le produit mis à jour
      .then((response) =>
        setProducts((prevProduct) =>
          prevProduct.map((productMap) =>
            productMap.id === response.id ? { ...response } : productMap
          )
        )
      );
  };

  return (
    <>
      <h1>Exercice API</h1>

      <Consigne />
      <Table data={products} removeFunction={handleRemoveProduct} updateFunction={updateProduct} />
    </>
  );
};
