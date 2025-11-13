'use client'
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react"

export default function MoveToTop() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
                setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const handleMove=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }


    return (
        <div>
            {
                scrollY > 100 ?
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all cursor-pointer fixed bottom-10 right-4" onClick={handleMove}>
                    <ArrowUp/>
                </div>
                :
                null
            }
        </div>
    )
}