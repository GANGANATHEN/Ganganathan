"use client";
import { motion, useScroll, useTransform } from 'framer-motion';

import React from 'react'

export default function ScrollOne() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-500 to-yellow-500 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="p-8 bg-white/90 shadow-2xl rounded-3xl max-w-lg"
    >
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6">
        Smooth Scroll Animation
      </h1>
      <p className="text-lg text-gray-700">
        This is a fade-in animation triggered by scrolling down. Enhance
        user experience by making content appear progressively as users
        scroll.
      </p>
    </motion.div>

    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute top-[10%] text-2xl text-purple-200 font-semibold"
    >
      Top-to-Bottom Animated Text!
    </motion.div>
  </section>
  )
}