import { NextRequest, NextResponse } from "next/server"
import { connectToDB } from "@/app/routes/db"

type Params = {
    id: string
}
type CartBody = {
    productId: string
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDB();
    const userId = params.id;

    const userCart = await db.collection('carts').findOne({ userId });
    if (!userCart) return NextResponse.json({ data: [] }, { status: 200 });

    const cartIds = userCart.cartIds;
    const userProducts = await db.collection('products').find({ id: { $in: cartIds } }).toArray();

    return NextResponse.json({ data: userProducts }, { status: 200 });
}

export async function POST(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDB();
    const userId = params.id;
    const { productId }: CartBody = await request.json();

    await db.collection('carts').updateOne(
        { userId },
        { $push: { cartIds: productId } },
        { upsert: true }
    );

    const updatedCart = await db.collection('carts').findOne({ userId });
    const cartIds = updatedCart?.cartIds ?? [];
    const userProducts = await db.collection('products').find({ id: { $in: cartIds } }).toArray();

    return NextResponse.json({ data: userProducts }, { status: 201 });
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDB();
    const userId = params.id;
    const { productId }: CartBody = await request.json();

    await db.collection('carts').updateOne(
        { userId },
        { $pull: { cartIds: productId } }
    );

    const updatedCart = await db.collection('carts').findOne({ userId });
    const cartIds = updatedCart?.cartIds ?? [];
    const userProducts = await db.collection('products').find({ id: { $in: cartIds } }).toArray();

    return NextResponse.json({ data: userProducts }, { status: 200 });
}
