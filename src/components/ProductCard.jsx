/* eslint-disable react/prop-types */
export const ProductCard = ({product}) => {
  return (
    <div className="gap-2 p-2 bg-black border shadow-lg">
        <p className="font-semibold">{product.category}</p>
        <div className="flex gap-5">
            <img
                src={product.image}
                alt=""
                className="object-cover w-1/2 h-32 shadow-lg"
            />
            <div className="m-auto font-semibold w-fit h-fit">
                <h4>{product.title}</h4>
                <h4>{product.price}€</h4>
            </div>
        </div>
        <div>{product.description}</div>
    </div>
  );
}