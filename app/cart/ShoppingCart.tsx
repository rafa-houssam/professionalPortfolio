'use client'
import { useState } from "react";
import ProductsList from "../components/ProductsList";
import { Product } from "../ProductData";

export default  function ShoppingCart({ initialState,page="" }: { initialState: Product[],page?:string }) {
    const [cartProducts, setcartProducts] = useState(initialState)
   
    return (
        <>
            <div>shopping cart</div>
            <ProductsList Products={cartProducts} page={`${page}`} />

        </>
    )


}