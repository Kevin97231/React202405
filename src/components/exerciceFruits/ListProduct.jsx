/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ListProduct({ title, products }) {
  
    return (
    <>
      <h2>{title}</h2>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {products.map(
            (product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

export default ListProduct;