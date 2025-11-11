import Image from "next/image";
import { AllProducts } from "../AllProducts";

export default async function ProductDetail({ params }: { params: Promise<{ productDetails: string }> }) {

    const paramData = await params;
    const { productDetails } = paramData

    const item = AllProducts.find((item)=>item.id===productDetails)

    return (
        <div>
            <div key={item?.id} className="w-[200px] h-[300px] flex flex-col justify-between p-2 rounded-lg bg-gradient-to-br from-white/35 to-white/[0.02] backdrop-blur-xl hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.01] transition-all">
                <div className="h-[200px]">
                    <Image src={item?.imageURL || ''} width={200} height={200} alt="item-image" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h1>{item?.title}</h1>
                    <p className="text-[12px] text-gray-400">Category: {item?.category}</p>
                </div>
            </div>
        </div>
    )
} 