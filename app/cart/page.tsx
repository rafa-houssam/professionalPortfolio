
import { cache } from 'react'
import ProductsList from '../components/ProductsList'
import ShoppingCart from './ShoppingCart'
export const dynamic='force-dynamic';


async function Cart() {
  const response = await fetch(process.env.NEXT_PUBLIC_URL + 'routes/users/1/cart', { cache: 'no-cache' })
  const cartProducts = await response.json()
  return (
    <>
      <ShoppingCart initialState={cartProducts.data} page='cart' />

    </>
  )
}


export default Cart