/* eslint-disable react/prop-types */
export const Table = ({ data = [] }) => {
  // Je considère que touts les objets que j'affiche avec ce composant auront une propriété 'id' .

  let cles = [];

  // Je rentre dans le 'if' si mon talbeau n'est pas vide (la valeur par défaut de data étant '[]')
  if (data.length > 0) {
    // Object.keys(myObject)  -> renvoie une liste contenant l'ensmeble des clé de 'myObject'
    cles = Object.keys(data[0]);
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-4/6">
        <thead>
          <tr>
            {/* On parcours notre tableau de clés pour déterminé le nom de nos colonnes*/}
            {cles.map((cle) => (
              <th key={cle}>{cle}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              {cles.map((cle) => (
                <td key={cle}>{product[cle]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
