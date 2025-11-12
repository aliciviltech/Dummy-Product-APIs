"use client"
import { motion } from "framer-motion"

export default function SecondaryButton({text}:{text:string}) {
    return (

        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-fit px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-md shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all cursor-pointer"
        >
            {text}
        </motion.button>

    )
}