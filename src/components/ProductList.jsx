/* eslint-disable react/prop-types */

import { ProductCard } from "./ProductCard";

export const ProductList = ({products}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
        {
            products && products.map( product => 
                <ProductCard key={product.id} product={product}/>
            )
        }
    </div>
  );
}