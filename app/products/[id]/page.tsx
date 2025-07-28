import React from 'react'
import { products } from '@/app/ProductData'
import ProductDetails from '@/app/components/Product'
export const dynamic='force-dynamic';



const ProductPage = async ({ params }: { params: { id: string } }) => {
  const url = process.env.NEXT_PUBLIC_URL + 'routes/products/'+params.id
  const response = await fetch(url)
  const product = await response.json()

  return (
    <>

      <div className='text-center text-gray-700 mb-5 font-bold '>ProductDetails </div>
      {product && (
        <div className=' font-serif text-center w-250 ml-auto mr-auto bg-gray-300'>
          <ProductDetails product={product.product} height={250} width={250} descr={true} />
        </div>
      )}
    </>

  )
}

export default ProductPage