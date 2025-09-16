'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function Feelings() {
  const { scrollYProgress } = useScroll();

  // Animate border radius (0 → 30px)
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ['0%', '30px']);

  // Fade in the text (0 → 1)
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section className="h-screen relative">
      {/* Image Container */}
      <motion.div
        className="relative w-full h-screen overflow-hidden"
        style={{ borderRadius }}
      >
        <Image
          src="/feelings.png"
          alt="Feelings"
          fill
          className="object-cover"
          priority
        />

        {/* Text Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-center p-6"
          style={{ opacity: textOpacity }}
        >
          <div>
            <p className="text-lg text-gray-200">Personal Growth</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Feel more human every day
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
