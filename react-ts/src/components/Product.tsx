import React from 'react'
import {IProduct} from "../App"



interface ProductProp {
    product: IProduct;
    handleAddToCart (id: number): void;
}

function Product({product, handleAddToCart}: ProductProp) {
    return (
        <div style={{display:"flex", gap:"10px", alignItems:"center", justifyContent:"center"}}>
            <p>{product.id}</p>
            <button onClick={() => handleAddToCart(product.id)}>
                Add to Cart
            </button>
        </div>
    )
}

export default Product