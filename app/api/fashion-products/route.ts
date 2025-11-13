import { NextResponse } from "next/server";
import { FashionProducts } from "../AllApiProducts";

export async function GET(){
    return NextResponse.json(FashionProducts)
}