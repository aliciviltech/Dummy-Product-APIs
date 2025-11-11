export default async function ProductDetail({params}:{params:Promise<{productDetails:string}>}){
    
    const paramData = await params;
    const {productDetails}=paramData
    
    return(
        <div>
            Product detail page
            {productDetails}
        </div>
    )
} 