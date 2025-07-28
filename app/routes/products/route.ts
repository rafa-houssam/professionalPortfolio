import { NextResponse } from "next/server"
import { connectToDB } from "../db"

export async function GET(){
    const {db}= await connectToDB()
    const products=await db.collection('products').find({}).toArray()
    return NextResponse.json({products},{status:200})
}