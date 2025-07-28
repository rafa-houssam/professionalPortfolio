import { NextRequest, NextResponse } from "next/server"
import { connectToDB } from "../../db"
type Params={
    id:string
}

export async function GET(request:NextRequest,{params}:{params:Params}){
    const {db}=await connectToDB()

    const productId=params.id
    const product= await db.collection('products').findOne({id:productId})
    if(!product){
        return NextResponse.json({"error":"Product not found"},{status:404})
    }
    return NextResponse.json({product},{status:200})



}