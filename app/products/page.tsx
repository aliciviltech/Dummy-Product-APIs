// 'use client'
import Image from "next/image";
import { AllProducts } from "./AllProducts";
import Link from "next/link";

export default async function Products() {

    // const response = await fetch('https://fakestoreapi.com/products');
    // const response = await fetch(`${process.env.NEXT_URL}/api/products`);
    // const data = await response.json();
    // console.log(data)

    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <h1 className="w-full text-3xl px-6 py-4 text-center select-none font-bold font-sans text-cyan-500 mb-10">All Products</h1>
            <div className="flex gap-10 flex-wrap justify-center">
                {
                    AllProducts.map((item, i) =>
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

