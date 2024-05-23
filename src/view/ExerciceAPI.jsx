import { useEffect, useState } from "react";
import { Consigne } from "../components/ExerciceAPI/Consigne";
import { Table } from "../components/ExerciceAPI/Table";
import { useAxios } from "../hooks/useAxios";

export const ExerciceAPI = () => {
  
    const { get } = useAxios()
  
    const [products, setProducts] = useState()

    useEffect(() => {
        console.log('Requête en cours')
        get()
            .then(response => {
                console.log(response)
                setProducts(response)
            })
    },[])

    return (
    <>
     <h1>Exercice API</h1>

    <Consigne/>
    <Table data={products}/>
    </>
  );
}