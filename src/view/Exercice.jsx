import Correction from "../components/exerciceFruits/Correction";

export const Exercice = () => {
    const products = [
        { category: "Fruits", price: "$1", number: 0, name: "Banana" },
        { category: "Fruits", price: "$1", number: 2, name: "Mango" },
        { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
        { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
        { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
        { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
    ];

    const fruits = [];
    const vegetables = [];

    products.forEach((product) => {
        if (product.category === "Fruits") {
            fruits.push(product);
        }
    });

    products.forEach((product) => {
        if (product.category === "Vegetables") {
            vegetables.push(product);
        }
    });

    return (
        <>
            <h1>Exercice</h1>

            <ComposantFruits data={fruits} />
            <ComposantVegetables data={vegetables} />

            <pre>
                {`
                  1)  Utiliser un composant parent et deux composants enfants (il est possible d'utiliser un seul composant enfant qu'on appellera 2 fois)

                      Les deux composants enfant afficheront un tableau contenant les colonnes 'nom', 'prix' et 'quantité'. Le premier enfant affichera UNIQUEMENT les fruits,
                      le second uniquement les légumes

                      (Utiliser la fonction filter() pour trier)

                  2)  Ajouter une case à cocher permettant de masquer / afficher les produits qui ne sont pas en stock (s'aider de l'attribut 'number' représentant la quantité)

                  3)  Ajouter une barre de recherche permettant de faire une recherche sur le 'name' sur l'ensemble du tableau
              `}
            </pre>
        </>
    );
};

function ComposantFruits({ data }) {
    return (
        <>
            <h2>Fruits</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((fruit) => (
                        <tr key={fruit}>
                            <td>{fruit.name}</td>
                            <td>{fruit.price}</td>
                            <td>{fruit.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function ComposantVegetables({ data }) {
    return (
        <>
            <h2>Vegetables</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((vegetable) => (
                        <tr key={vegetable}>
                            <td>{vegetable.name}</td>
                            <td>{vegetable.price}</td>
                            <td>{vegetable.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Exercice;
