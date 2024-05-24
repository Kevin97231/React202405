import { useEffect } from "react";
import { useForm } from "react-hook-form";

/* eslint-disable react/prop-types */
export const FormProduct = ({submitMethod, productToModify, closeModal}) => {
  
    const { register, handleSubmit, formState:{ errors }, setValue, clearErrors} = useForm()

    useEffect(() => {
        Object.keys(productToModify).forEach(key => {
            clearErrors(key)
            setValue(key,productToModify[key])
        })
    },[productToModify])

    const onSubmit = (product) => {
        submitMethod(productToModify.id, product)
        closeModal()
    }

    const verifNumberForm = {
        required: true,
        max : { value: 100, message: "Valeur max: 100" },
        min : { value: 0, message: "Valeur min: 0" }
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <div>
                <span>Nom</span>
            </div>
        </label>
        <input
            type='text'
            className="input input-bordered w-full max-w-xs"
            { ...register("name", {
                required: true
            })}
        />
        { errors.name && <span>{errors.name.message}</span>}
        <label>
            <div>
                <span>Prix</span>
            </div>
        </label>
         <input
            type='number'
            className="input input-bordered w-full max-w-xs"
            { ...register("price", verifNumberForm
            )}
        />
        { errors.price && <span>{errors.price.message}</span>}
        <label>
            <div>
                <span>Quantité</span>
            </div>
        </label>
         <input
            type='number'
            className="input input-bordered w-full max-w-xs"
            { ...register("number", verifNumberForm
            )}
        />
        { errors.number && <span>{errors.number.message}</span>}
         <label>
            <div>
                <span>Catégorie</span>
            </div>
        </label>
         <input
            type='text'
            className="input input-bordered w-full max-w-xs"
            { ...register("category", {
                required: "catégorie requise",
                maxLength: { value: 10, message: "Attention ! 10 caractères maximum !" },
            })}
        />
        { errors.category && <span>{errors.category.message}</span>}

        <button type='submit'>Soumettre</button>
    </form>
  );
}