export default async function Products() {
    
    // const response = await fetch('https://fakestoreapi.com/products');
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();
    console.log(data)
    
    return ( 
        <>
        <div>All Products</div>
        <div className="flex flex-col gap-10">
            {
                // data.map((item:any,i:number)=> <div key={item.id}> {i+1} - {item.title}</div> )
}
        </div>
     </>
     );
}

