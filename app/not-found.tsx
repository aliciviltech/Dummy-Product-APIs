import Link from "next/link";

export default function NotFound(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-[40px]"> 404 - Not Found</h1>
            <p>Go back to <Link href={'/'} className="underline text-blue-600">Home Page</Link> </p>
        </div>
    )
}