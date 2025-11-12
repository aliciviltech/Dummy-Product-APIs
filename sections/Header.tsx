"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from "react"

export default function Header() {
      const [isOpen, setOpen] = useState(false)
    return (
        < header className = {`w-full ${isOpen ? 'h-44' : 'h-24'} overflow-hidden px-4 py-4 fixed top-0 left-0 z-10 flex flex-col sm:flex-row justify-between sm:items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-500`}>
                <h1
                  className="text-3xl  py-4 select-none font-bold font-momo sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  <Link href={'/'}>Engineer MA</Link>
                </h1>
                <Link href={'/products'} className={`py-6 text-center`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-fit px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all cursor-pointer"
                  >
                    View All Products
                  </motion.button>
                </Link>
                <div className='fixed top-6 right-4 sm:hidden'><Hamburger toggled={isOpen} toggle={setOpen} size={20} /></div>
        
        
              </header >
        
    )
}