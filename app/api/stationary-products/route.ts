import { NextResponse } from "next/server";
import { StationaryProducts } from "../AllApiProducts";

export async function GET(){
    return NextResponse.json(StationaryProducts)
}