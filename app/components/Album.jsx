'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const images = [
  '/images/img01.png',
  '/images/img02.png',
  '/images/img03.png',
  '/images/img05.png',
  '/images/img06.png',
  '/images/img07.png',
  '/images/img08.png',
  '/images/img09.png',
  '/images/img10.png',
  '/images/img11.png',
  '/images/img12.png',
  '/images/img13.png',
  '/images/img14.png',
];
const IMAGE_COUNT = images.length;

function AnimatedImage({
  scrollYProgress,
  imgSrc,
  xStart,
  xEnd,
  yEnd,
  rotEnd,
}) {
  const animationRange = [0, 0.45];

  const x = useTransform(scrollYProgress, animationRange, [xStart, xEnd]);
  const y = useTransform(scrollYProgress, animationRange, [0, yEnd]);
  const rotate = useTransform(scrollYProgress, animationRange, [0, rotEnd]);
  const borderRadius = useTransform(scrollYProgress, animationRange, [
    '15%',
    '15%',
  ]);

  return (
    <motion.div
      style={{ x, y, rotate, borderRadius }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      className="absolute overflow-hidden"
    >
      <Image
        src={imgSrc}
        alt="Showcase Image"
        width={200}
        height={200}
        className="object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl"
      />
    </motion.div>
  );
}

export default function Album() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Adjust radius responsively
  const radius = useMemo(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 180;
      if (window.innerWidth < 1024) return 300;
    }
    return 400;
  }, []);

  const upperCount = Math.ceil(IMAGE_COUNT / 2);
  const lowerCount = IMAGE_COUNT - upperCount;

  // Upper half
  const upperX = Array.from(
    { length: upperCount },
    (_, i) => Math.cos(Math.PI - (i / (upperCount - 1)) * Math.PI) * radius
  );
  const upperY = Array.from(
    { length: upperCount },
    (_, i) => Math.sin(Math.PI - (i / (upperCount - 1)) * Math.PI) * radius * -1
  );

  // Lower half
  const lowerX = Array.from(
    { length: lowerCount },
    (_, i) => Math.cos((i / (lowerCount - 1)) * Math.PI) * radius
  );
  const lowerY = Array.from(
    { length: lowerCount },
    (_, i) => Math.sin((i / (lowerCount - 1)) * Math.PI) * radius
  );

  // Merge
  const circleX = [...upperX, ...lowerX];
  const circleY = [...upperY, ...lowerY];

  // Smooth rotation
  const finalRotate = Array.from(
    { length: IMAGE_COUNT },
    (_, i) => i * (360 / IMAGE_COUNT)
  );

  // Starting line positions
  const SPREAD = 200;
  const TOTAL_WIDTH = (IMAGE_COUNT - 1) * SPREAD;
  const START_X = -TOTAL_WIDTH / 2;
  const initialX = Array.from(
    { length: IMAGE_COUNT },
    (_, i) => START_X + i * SPREAD
  );

  // Text animation
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.5, 0.65], [0.8, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.65], [40, 0]);

  return (
    <section ref={ref} className="relative h-[350vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, i) => (
            <AnimatedImage
              key={i}
              scrollYProgress={scrollYProgress}
              imgSrc={img}
              xStart={initialX[i]}
              xEnd={circleX[i]}
              yEnd={circleY[i]}
              rotEnd={finalRotate[i]}
            />
          ))}

          <motion.div
            style={{ opacity: textOpacity, scale: textScale, y: textY }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute flex flex-col items-center justify-center px-6 text-center"
          >
            <span className="mb-4 text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Personal Growth
            </span>
            <h1 className="max-w-2xl text-slate-800 text-lg md:text-2xl font-bold">
              A gentle space to understand yourself
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}