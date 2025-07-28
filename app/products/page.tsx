import React from 'react'
import ProductsList from '../components/ProductsList'

export const dynamic='force-dynamic';

const Products = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL + 'routes/products')
    const products = await response.json()
    const response2 = await fetch(process.env.NEXT_PUBLIC_URL + 'routes/users/1/cart')
    const carts = await response2.json()



    return (
        <>

            <ProductsList Products={products.products} initialCartState={carts.data} />


        </>

    )
}

export default Products