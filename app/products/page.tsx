'use client'
import Image from "next/image";
import { ALLProductsType, FashionProducts, FashionProductType, FoodProducts, StationaryProducts } from "./AllProducts";
import Link from "next/link";
import Header from "@/sections/Header";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Spacer from "@/components/spacer";
import { useEffect, useState } from "react";

export default function Products() {

    // const response = await fetch('https://fakestoreapi.com/products');
    // const response = await fetch(`${process.env.NEXT_URL}/api/products`);
    // const data = await response.json();
    // console.log(data)

    const [displayProducts, setDisplayProducts]  = useState<ALLProductsType>(FashionProducts)
    useEffect(()=>{
        setDisplayProducts(FashionProducts)
    },[])
    const handleDisplayProducts = (products:ALLProductsType)=>{
        setDisplayProducts(products)
    }

    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <Header/>
            <Spacer height="h-32"/>

            <div className="buttons flex gap-6 justify-center flex-col sm:flex-row items-center">
                <div onClick={()=>handleDisplayProducts(FashionProducts)}><SecondaryButton text="Fashion Products"/></div>
                <div onClick={()=>handleDisplayProducts(StationaryProducts)}><SecondaryButton text="Stationary Products"/></div>
                {/* <div onClick={()=>handleDisplayProducts(FoodProducts)}><SecondaryButton text="Food Products"/></div> */}
            </div>

            <h1 className="w-full mt-10 text-3xl px-6 py-4 text-center select-none font-bold font-sans text-cyan-500 mb-10">{displayProducts[0]?.mainCategory[0].toUpperCase() +  displayProducts[0]?.mainCategory.slice(1)} Products</h1>
            <div className="flex gap-10 flex-wrap justify-center">
                {
                    displayProducts?.map((item, i) =>
                        <Link href={`/products/${item.id}`} key={item.id}>
                        <div  className="w-[200px] h-[300px] flex flex-col justify-between p-2 rounded-lg bg-gradient-to-br from-white/35 to-white/[0.02] backdrop-blur-xl hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.01] transition-all">
                            <div className="h-[200px]">
                                <Image src={item.imageURL} width={200} height={200} alt="item-image" className="w-full h-full object-cover" />
                            </div>
                            <div>
                            <h1>{item.title}</h1>
                            <p className="text-[12px] text-gray-400">Category: {item.category}</p>
                            </div>
                        </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

