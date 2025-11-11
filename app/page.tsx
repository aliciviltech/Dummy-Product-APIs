"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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
      transition: { duration: 0.8, ease: "easeOut" },
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
          className="absolute top-40 right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={isLoaded ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={isLoaded ? { scale: [1.2, 1, 1.2] } : {}}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-4xl">
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 mb-6"
            variants={itemVariants}
          >
            Dummy Product API
          </motion.h1>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
          Free, ready-to-use product APIs for your projects — ideal for developers and learners
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
          >
            Explore APIs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            View Docs
          </motion.button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="relative py-24 px-6 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">About DummyProductAPI</h2>
          <p className="text-center text-slate-300 text-lg leading-relaxed">
            Our API serves dummy product data to help developers test UI components, fetch calls, and integration flows
            without managing databases or real endpoints. It's fast, free, and simple.
          </p>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="relative py-24 px-6 md:px-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Fast & Free", desc: "Instant dummy data without signup.", icon: "⚡" },
            { title: "RESTful JSON", desc: "Clean and consistent endpoints.", icon: "🔗" },
            { title: "Easy Integration", desc: "Works with any frontend or backend.", icon: "🚀" },
            { title: "No Auth", desc: "Start fetching immediately.", icon: "🔓" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Glass background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20" />

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="relative p-8 h-full flex flex-col">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Example Section */}
      <motion.section
        className="relative py-24 px-6 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Try the API
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
            <p className="text-cyan-300 mb-4">$ curl https://dummyapi.vercel.app/api/products</p>
            <pre className="text-slate-200">
              {`[
  { "id": 1, "name": "T-Shirt", "price": 25 },
  { "id": 2, "name": "Shoes", "price": 60 }
]`}
            </pre>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-20 px-6 md:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Join thousands of developers using DummyProductAPI for their projects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all"
          >
            Explore APIs
          </motion.button>
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
