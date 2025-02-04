"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

const CherryBlossom = ({ style = {} }) => (
  <svg width="40" height="40" viewBox="0 0 20 20" style={style}>
    <path d="M10 0C7.5 0 5.9 2.5 5.9 3.8C5.9 5 6.5 5.9 7.4 6.3C8.2 6.7 9.1 6.7 10 6.7C10.9 6.7 11.8 6.7 12.6 6.3C13.5 5.9 14.1 5 14.1 3.8C14.1 2.5 12.5 0 10 0Z" fill="#FFD1DC" />
    <path d="M14.1 3.8C14.1 5 13.5 5.9 12.6 6.3C11.8 6.7 10.9 6.7 10 6.7C9.1 6.7 8.2 6.7 7.4 6.3C6.5 5.9 5.9 5 5.9 3.8C5.9 5.4 4.5 7.1 3.1 7.8C1.7 8.5 0 8.5 0 8.5C1.6 8.5 3.3 9.9 4 11.3C4.7 12.7 4.7 14.4 4.7 14.4C4.7 12.8 6.1 11.1 7.5 10.4C8.9 9.7 10.6 9.7 10.6 9.7C9 9.7 7.3 8.3 6.6 6.9C5.9 5.5 5.9 3.8 5.9 3.8C5.9 5.4 4.5 7.1 3.1 7.8C1.7 8.5 0 8.5 0 8.5C1.6 8.5 3.3 9.9 4 11.3C4.7 12.7 4.7 14.4 4.7 14.4C4.7 12.8 6.1 11.1 7.5 10.4C8.9 9.7 10.6 9.7 10.6 9.7C9 9.7 7.3 8.3 6.6 6.9C5.9 5.5 5.9 3.8 5.9 3.8" fill="#FFC0CB" />
  </svg>
);

const PartyPopper = ({ className = "", style = {}, color1 = "#FFD700", color2 = "#FF69B4" }) => (
  <svg className={className} style={style} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10L28 2L31 10L39 7L34 14L42 16L34 19L39 26L31 23L28 31L25 23L17 26L22 19L14 16L22 14L17 7L25 10Z" fill={color1} />
    <path d="M25 15L27 10L29 15L34 13L31 17L36 18L31 20L34 24L29 22L27 27L25 22L20 24L23 20L18 18L23 17L20 13L25 15Z" fill={color2} />
  </svg>
);

const GiftBox = () => (
  <div className="relative">
    {/* Top row */}
    <motion.div
      className="absolute -top-16 -left-16"
      initial={{ scale: 0, rotate: -45, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [-45, 0, -15],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#FFD700" color2="#FF69B4" />
    </motion.div>
    <motion.div
      className="absolute -top-16 left-0"
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [0, -15, 15],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#9370DB" color2="#8A2BE2" />
    </motion.div>
    <motion.div
      className="absolute -top-16 -right-16"
      initial={{ scale: 0, rotate: 45, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [45, 0, 15],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#00CED1" color2="#1E90FF" />
    </motion.div>

    {/* Middle row */}
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 -left-16"
      initial={{ scale: 0, rotate: -90, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [-90, -45, -60],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#FF69B4" color2="#FFB6C1" />
    </motion.div>
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 -right-16"
      initial={{ scale: 0, rotate: 90, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [90, 45, 60],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#FFD700" color2="#FFA500" />
    </motion.div>

    {/* Bottom row */}
    <motion.div
      className="absolute -bottom-16 -left-16"
      initial={{ scale: 0, rotate: -135, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [-135, -180, -165],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.7,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#00FF7F" color2="#32CD32" />
    </motion.div>
    <motion.div
      className="absolute -bottom-16 left-0"
      initial={{ scale: 0, rotate: 180, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [180, 165, -165],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#FF1493" color2="#FF69B4" />
    </motion.div>
    <motion.div
      className="absolute -bottom-16 -right-16"
      initial={{ scale: 0, rotate: 135, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1, 1.1, 1],
        rotate: [135, 180, 165],
        opacity: [0, 1, 1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        delay: 0.9,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <PartyPopper color1="#9370DB" color2="#8A2BE2" />
    </motion.div>
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box Base */}
      <rect x="40" y="80" width="120" height="100" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="4" />
      {/* Box Lid */}
      <rect x="30" y="60" width="140" height="30" fill="#FF69B4" stroke="#FF1493" strokeWidth="4" />
      {/* Ribbon Vertical */}
      <rect x="90" y="40" width="20" height="140" fill="#FF1493" />
      {/* Ribbon Horizontal */}
      <rect x="40" y="90" width="120" height="20" fill="#FF1493" />
      {/* Ribbon Bow Left */}
      <path d="M100 40 C80 40 70 30 80 20 C90 10 110 20 100 40" fill="#FF1493" />
      {/* Ribbon Bow Right */}
      <path d="M100 40 C120 40 130 30 120 20 C110 10 90 20 100 40" fill="#FF1493" />
    </svg>
  </div>
);

export default function ThirdSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cherryBlossoms = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2
    }));
  }, []);

  const letters = ["H", "A", "P", "P", "Y", " ", "A", "N", "N", "I", "V", "E", "R", "S", "A", "R", "Y", "!"];

  useEffect(() => {
    // Auto-advance to step 2 after 3 seconds
    if (currentStep === 1) {
      const timer = setTimeout(() => {
        setCurrentStep(2);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    // Start revealing letters after step 2 appears
    if (currentStep === 3 && textIndex < letters.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 300); // Increased delay from 150ms to 300ms for slower animation
      return () => clearTimeout(timer);
    }
  }, [currentStep, textIndex, letters.length]);

  useEffect(() => {
    // Reset text index when changing steps
    if (currentStep !== 3) {
      setTextIndex(0);
    }
  }, [currentStep]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F7A6C4] to-[#F28AB2] relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {isGiftOpen && cherryBlossoms.map(blossom => (
          <motion.div
            key={blossom.id}
            initial={{
              x: `${blossom.x}vw`,
              y: -20,
              rotate: 0,
              opacity: 1
            }}
            animate={{
              y: ['-20px', '100vh'],
              x: [`${blossom.x}vw`, `${blossom.x + (Math.random() * 40 - 20)}vw`],
              rotate: [0, 360],
              opacity: [1, 0.7]
            }}
            transition={{
              duration: blossom.duration,
              delay: blossom.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            <CherryBlossom />
          </motion.div>
        ))}
        <AnimatePresence mode="wait">
          {/* Step 1: Big "SO" Text */}
          {currentStep === 1 && (
            <motion.div
              key="so-text"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-wider -mt-8"
            >
              และ
              <p>เค้ามีอะไรจะให้งับ...</p>
            </motion.div>
          )}


          {/* Step 2: Gift Box */}
          {currentStep === 2 && (
            <motion.div
              className="flex flex-col items-center gap-8 -mt-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {!isGiftOpen ? (
                <>
                  <motion.div
                    className="cursor-pointer relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.02, 1],
                      filter: ["drop-shadow(0 0 0px rgba(255,255,255,0.5))", "drop-shadow(0 0 15px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0.5))"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    onClick={() => setIsGiftOpen(true)}
                  >
                    <motion.div
                      className="text-white text-lg md:text-xl font-medium text-center whitespace-nowrap mb-20"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [-5, 0, 0, 5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      Click to Open! 🎁
                    </motion.div>
                    <GiftBox />
                  </motion.div>
                  <motion.div
                    className="flex justify-center items-center text-white text-xl md:text-2xl text-center font-medium z-50 mt-14"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [-5, 0, 0, 5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    ของขวัญสุดพิเศษให้เธอ <FaHeart className="ml-4" />
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-6 z-50"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-lg md:text-xl text-center max-w-[600px] leading-relaxed"
                  >
                    I give you a PS5 for girl. :P
                  </motion.p>
                  <motion.div
                    className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] p-6"
                    initial={{ rotate: 0, x: 0, opacity: 0, scale: 0.5 }}
                    animate={{
                      x: [-10, 10, -10],
                      rotate: [-3, 3, -3],
                      opacity: 1,
                      scale: [0.5, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      opacity: { duration: 0.8 },
                      scale: { duration: 1.2, ease: "easeOut" },
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.5
                    }}
                  >
                    <Image
                      src="/happyanniversary/dyson.png"
                      alt="Dyson Air Straightener"
                      fill
                      style={{
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))"
                      }}
                      className="rounded-lg"
                    />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-lg md:text-xl text-center max-w-[600px] leading-relaxed"
                  >
                    {`ชอบไหมคะ คนสวย  อิอิ >_<`}
                  </motion.p>
                  <motion.button
                    className="mt-8 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 border border-white/20 transition-colors duration-300 text-lg md:text-xl font-medium"
                    onClick={() => {
                      setCurrentStep(3);
                      setImageLoaded(false);
                      setTextIndex(0);
                      setIsGiftOpen(false); // Reset gift state when moving to next step
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <FaHeart /> สุดท้ายละ... <FaArrowRight />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Anniversary Image and Text */}
          {currentStep === 3 && (
            <motion.div
              key="anniversary-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-8 -mt-8"
            >
              {/* Image */}
              <motion.div
                className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl border-4 border-white/20"
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <div className="flex gap-2">
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                )}
                <Image
                  src="/happyanniversary/anniversary.png"
                  alt="Anniversary"
                  width={400}
                  height={600}
                  unoptimized
                  onLoadingComplete={() => setImageLoaded(true)}
                  priority
                  className="object-cover object-bottom"
                />
              </motion.div>
              {imageLoaded && (
                <>
                  {/* Happy Anniversary Text */}
                  <div className="text-3xl md:text-5xl font-bold text-white tracking-wide text-center">
                    {letters.slice(0, textIndex).map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-lg md:text-xl text-center max-w-[600px] leading-relaxed p-6"
                  >
                    จบแล้ว.. วันสุดท้ายของทริปญี่ปุ่นของเราพอดีด้วย ขอบคุณน้า ที่พาหนูมาเที่ยวญี่ปุ่น ดีใจมากเลยค่ะ เป็นของขวัญที่ดีที่สุดเลย goal ในชีวิตหนูสำเร็จไปอีกเรื่องเพราะเธอเลยนะ แง เหมือนฝันเลยอะที่ตอนนี้ได้มาอยู่ที่นี่ ตอนนี้ได้มาฉลองวาเลนไทน์กับวันครบรอบในประเทศในฝัน มันเริ่ดมากอะ คือชอบมากๆเลยค่ะ มีความสุขมากๆๆๆ ขอบคุณมากๆ เลยนะคะ รักเธอมากๆนะคะ ตุ้บๆๆๆ xoxo
                  </motion.p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div >
  );
}