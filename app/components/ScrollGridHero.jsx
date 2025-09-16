'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

const ScrollGridHero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

 
  const personalGrowthOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 1, 0]
  );
  const headingOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const headingY = useTransform(scrollYProgress, [0.3, 0.4], [0, -100]);

  const images = [
    {
      src: '/images/img01.png',
      top: '15%',
      left: '5%',
      width: '20%',
      height: '20%',
    },
    {
      src: '/images/img06.png',
      top: '0%',
      left: '30%',
      width: '40%',
      height: '30%',
    },
    {
      src: '/images/img10.png',
      top: '10%',
      left: '75%',
      width: '20%',
      height: '30%',
    },
    {
      src: '/images/img05.png',
      top: '40%',
      left: '0%',
      width: '25%',
      height: '30%',
    },
    {
      src: '/images/img15.png',
      top: '35%',
      left: '30%',
      width: '40%',
      height: '50%',
    },
    {
      src: '/images/img07.png',
      top: '50%',
      left: '75%',
      width: '25%',
      height: '30%',
    },
    {
      src: '/images/img04.png',
      top: '75%',
      left: '10%',
      width: '15%',
      height: '20%',
    },
  ];

  const centerImageIndex = 4;

  return (
    <section ref={targetRef} className="relative h-[300vh]  my-16">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Text */}
        <div className="relative z-10 text-center text-white">
          <motion.p style={{ opacity: personalGrowthOpacity }} className="mb-4">
            Personal Growth
          </motion.p>
          <motion.h1
            style={{ opacity: headingOpacity, y: headingY }}
            className="text-5xl md:text-7xl font-bold max-w-4xl"
          >
            AI that understands your emotions
          </motion.h1>
        </div>

      
        <motion.div
          className="absolute bottom-10 flex gap-4 z-0"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.25], [0, 200]),
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-40 h-40 overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                fill
                alt={`row-img-${i}`}
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

       
        <div className="absolute inset-0">
          {images.map((img, index) => {
            const isCenterImage = index === centerImageIndex;
            const initialScale = isCenterImage ? 3 : 0;
            const scale = useTransform(
              scrollYProgress,
              [0.25, 0.6],
              [initialScale, 1]
            );
            const opacity = isCenterImage
              ? 1
              : useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
            const borderRadius = useTransform(
              scrollYProgress,
              [0.3, 0.6],
              [0, 24]
            );

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: img.top,
                  left: img.left,
                  width: img.width,
                  height: img.height,
                  scale,
                  opacity,
                  borderRadius,
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[24px]">
                  <Image
                    src={img.src}
                    fill
                    alt={`grid-image-${index}`}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollGridHero;
