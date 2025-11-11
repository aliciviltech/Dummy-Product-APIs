'use client'
import { motion } from "framer-motion";

export default function LoadingState() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-50">
            <div className="flex flex-col items-center">
                {/* Circle Pulse */}
                <motion.div
                    className="w-20 h-20 rounded-full border-4 border-white border-t-transparent animate-spin"
                    style={{
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
                    }}
                ></motion.div>

                {/* Brand Text */}
                <motion.h1
                    className="mt-6 text-2xl font-semibold text-white tracking-wide"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                >
                    Loading Products...
                </motion.h1>
            </div>
        </div>
    );
}
