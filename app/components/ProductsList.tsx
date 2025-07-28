import Link from "next/link";
import { Product } from "../ProductData";
import Image from "next/image";
import ProductDetails from "./Product";
import { unique } from "next/dist/build/utils";



export default function ProductsList({Products,initialCartState = [],page=""}:{Products:Product[],initialCartState?:Product[],page?:string}){
   function getUniqueProducts(products: Product[]): Product[] {
    const unique: Product[] = [];
    const seenIds = new Set<string>();

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (!seenIds.has(product.id)) {
            unique.push(product);
            seenIds.add(product.id);
        }
    }

    return unique;
}

    return (
        <div className="grid grid-cols-4 gap-4 bg-gray-300 p-4">
        {getUniqueProducts(Products).map(product => (
            <div key={product._id} className="bg-gray-50 p-4 rounded shadow">
           <ProductDetails product={product} width={150} height={150} descr={false} initialCartState={initialCartState} page={`${page}`}/>
            </div>
        ))}
        </div>
    )
}