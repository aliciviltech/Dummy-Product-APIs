"use client"
import { Cross as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from 'next/link'
import Header from '@/sections/Header'
import Spacer from '@/components/spacer'
import Image from 'next/image'
import { AllProducts } from '../products/AllProducts'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)


  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <main className="font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={isLoaded ? { scale: [0.8, 1.2, 0.8] } : {}}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"
          animate={isLoaded ? { scale: [1.2, 0.5, 1.2] } : {}}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Header */}
      <Header />

      <Spacer />

      <motion.section
        className="relative py-24 px-6 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* ================================== fashion products ================================= */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Fashion Products API
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto relative group rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10" />





          <div className="relative p-8 md:p-12 font-mono text-sm overflow-x-auto">
            <p className="text-cyan-300 mb-4">https://dummy-product-api.vercel.app/api/products</p>
            <pre className="text-slate-200">
              {`[
  { 
        id: '1', 
        title: "Men Shirt 1",
        mainCategory:"fashion", 
        category: "men", 
        type: "shirts",
        imageURL:'/images/fashion-products/shirt1.jpeg' 
    },
    { 
        id: '2', 
        title: "Men Shirt 2", 
        mainCategory:"fashion",
        category: "men", 
        type: "shirts",
        imageURL:'/images/fashion-products/shirt2.jpeg' 
    },
    // ... more products
]`}
            </pre>
                <Spacer height='h-10'/>
            <div className='relative'>
              <p className="text-white mb-6">The imageURL contains the image of a product, example:</p>
              <Image src={AllProducts[0].imageURL} width={100} height={100} alt='image'/>
              <p className="text-white mt-6">And other fields as shown in above json data</p>
              {/* <ul className='pl-6 list-disc'>
                <li>id: {AllProducts[0].id}</li>
                <li>title: {AllProducts[0].title}</li>
                <li>category: {AllProducts[0].category}</li>
                <li>mainCategory: {AllProducts[0].mainCategory}</li>
                <li>type: {AllProducts[0].type}</li>
              </ul> */}

            </div>
          </div>

        </motion.div>

        <Spacer/>

        {/* ================================== Stationary products ================================= */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Stationary Products API
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto relative group rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10" />





          <div className="relative p-8 md:p-12 font-mono text-sm overflow-x-auto">
            <p className="text-cyan-300 mb-4">https://dummy-product-api.vercel.app/api/products</p>
            <pre className="text-slate-200">
              {`[
  { 
        id: '1', 
        title: "Men Shirt 1",
        mainCategory:"fashion", 
        category: "men", 
        type: "shirts",
        imageURL:'/images/fashion-products/shirt1.jpeg' 
    },
    { 
        id: '2', 
        title: "Men Shirt 2", 
        mainCategory:"fashion",
        category: "men", 
        type: "shirts",
        imageURL:'/images/fashion-products/shirt2.jpeg' 
    },
    // ... more products
]`}
            </pre>
                <Spacer height='h-10'/>
            <div className='relative'>
              <p className="text-white mb-6">The imageURL contains the image of a product, example:</p>
              <Image src={AllProducts[0].imageURL} width={100} height={100} alt='image'/>
              <p className="text-white mt-6">And other fields as shown in above json data</p>
              {/* <ul className='pl-6 list-disc'>
                <li>id: {AllProducts[0].id}</li>
                <li>title: {AllProducts[0].title}</li>
                <li>category: {AllProducts[0].category}</li>
                <li>mainCategory: {AllProducts[0].mainCategory}</li>
                <li>type: {AllProducts[0].type}</li>
              </ul> */}

            </div>
          </div>

        </motion.div>




      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative border-t border-white/10 py-12 px-6 md:px-16 bg-white/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-slate-400 mb-6">© 2025 DummyProductAPI. Built with ❤️ using Next.js</p>
          <div className="flex justify-center gap-8 text-sm">
            {["Home", "Docs", "GitHub", "Contact"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-slate-400 hover:text-cyan-300 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
