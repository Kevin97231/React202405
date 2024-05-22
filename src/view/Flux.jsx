/* eslint-disable react/prop-types */
function Flux () {

    const data = [
        { id:1, nom: 'Produit 1', prix: 20.99, quantite: 5},
        { id:2, nom: 'Produit 2', prix: 15.45, quantite: 10},
        { id:3, nom: 'Produit 3', prix: 75.32, quantite: 58},
        { id:4, nom: 'Produit 4', prix: 30.00, quantite: 25},
        { id:5, nom: 'Produit 5', prix: 26.00, quantite: 16},
    ];

    return (
        <>
         <h1>Les flux de données</h1>

        <h2>De parents vers enfants:</h2>
        <p>
            Pour faire passer des données d'un composant parent vers le composant enfant, bous devons utiliser les 'props'
        </p>
        <ComposantEnfant text="Voici les données que je t'envoie " data={data}/>
        </>
    )
}

function ComposantEnfant({text = 'Passe moi tes données !', data = []}) {
    return(
        <>
            {text}

            {
                data.map( (produit) => 
                    <div key={produit.id} className="border py-5">
                        <p>Nom: {produit.nom} </p>
                        <p>Nom: {produit.prix} </p>
                        <p>Nom: {produit.quantite} </p>
                    </div>
                )
            }
        </>
    )
}


export default Flux;