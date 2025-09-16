'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const cards = [
  '/section/img01.png',
  '/section/img02.png',
  '/section/img03.png',
  '/section/img04.png',
];

export default function Journey() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], 
  });

  const gap = 280;

  
  const initialX = [0, gap, gap * 2, gap * 3];

 
  const stackedY = [10, -10, -10, -10];

 
  const xTransforms = cards.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [initialX[i], 0])
  );

  const yTransforms = cards.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [0, stackedY[i]])
  );

  
  const rotateTransforms = cards.map(
    (_, i) => useTransform(scrollYProgress, [0, 1], [0, 0]) 
  );


  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="flex w-full max-w-6xl items-center gap-8 px-4">
          
          <div className="relative w-1/2 h-[400px]">
            {cards.map((src, index) => (
              <motion.div
                key={index}
                style={{
                  x: xTransforms[index],
                  y: yTransforms[index],
                  rotate: rotateTransforms[index],
                  zIndex: cards.length - index,
                }}
                className="absolute top-0 left-0 w-[240px] h-[320px] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src={src}
                  alt={`card-${index}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

         
          <motion.div
            style={{ opacity: textOpacity, x: textX }}
            className="w-1/2 text-left ml-50"
          >
            <h2 className="text-6xl leading-tight text-gray-800 mb-4 font-extrabold">
              Your mental <br />wellness journey <br />starts now
            </h2>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}