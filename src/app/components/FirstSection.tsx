"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import { useFontLoader } from "../../hooks/useFontLoader";

interface FirstSectionProps {
  onComplete: () => void;
}

export default function FirstSection({ onComplete }: FirstSectionProps) {
  const [step, setStep] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [rotateSmiley, setRotateSmiley] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isFontLoaded = useFontLoader();

  useEffect(() => {
    const timings = [
      { fn: () => setStep(1), delay: 2000 },
      { fn: () => setStep(2), delay: 9000 },
      { fn: () => setHighlight(true), delay: 10000 },
      { fn: () => setStep(3), delay: 13000 },
      { fn: () => setStep(4), delay: 16000 },
      { fn: () => setStep(5), delay: 19000 },
      { fn: () => setStep(7), delay: 23000 },
      { fn: () => setRotateSmiley(true), delay: 24000 },
      { fn: () => setStep(8), delay: 27000 },
      { fn: () => setStep(9), delay: 29000 }
    ];

    timings.forEach(({ fn, delay }) => {
      setTimeout(fn, delay);
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F7A6C4] to-[#F28AB2] relative overflow-hidden">
      {/* Centered Animated Text Section */}
      {!isFontLoaded ? (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-pink-300/90 text-4xl"
        >
          <FaHeart />
        </motion.div>
      ) : (
        <>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-xl md:text-2xl font-light -mt-24">
            {step === 1 && (
              <motion.div
                key="praewa"
                className="text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                <p className="text-4xl md:text-6xl">
                  {"อันย๊องงง".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1, delay: index * 0.1 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {" "}
                  <span className="text-6xl md:text-8xl">
                    {"แพรวา".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: ("อันย๊องงง".length + 1) * 0.1 + index * 0.1 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </p>
                <p>
                  {"เจ้าหม่ามี๊ที่ร้ากของหนู ;D".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: ("อันย๊องงง".length + "แพรวา".length + 2) * 0.1 + index * 0.1
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="realised-special"
                className="text-3xl md:text-4xl flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                <p>ปีนี้เค้ามีของขวัญ</p>
                <motion.p
                  key="special"
                  className="font-bold text-white mt-2 relative inline-block"
                  initial={{ backgroundSize: "0% 100%", fontSize: "1.5rem", color: "#ffffff", opacity: 1 }}
                  animate={
                    highlight
                      ? {
                        backgroundSize: "100% 100%",
                        fontSize: ["1.5rem", "2rem", "3rem"],
                        color: ["#ffffff", "#ffffff", "#F7A6C4"],
                      }
                      : {}
                  }
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  style={{
                    backgroundImage: highlight ? "linear-gradient(to right, #000000 100%, #000000 100%)" : "none",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    display: "inline-block",
                  }}
                >
                  สุดพิเศษ
                </motion.p>
                <p className="mt-2">มาให้เธอด้วย</p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.p
                key="because"
                className="text-4xl md:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                ตื่นเต้นไหม ?
              </motion.p>
            )}

            {step === 4 && (
              <motion.p
                key="ready"
                className="text-4xl md:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                พร้อมยัง ?
              </motion.p>
            )}

            {step === 5 && (
              <motion.p
                key="effort"
                className="text-4xl md:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              >
                ตั้งใจทำให้มากเลยนะ อิอิ
              </motion.p>
            )}

            {step === 7 && (
              <motion.div
                key="youarespecial"
                className="text-4xl md:text-5xl font-bold text-white flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1.2, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <p>เพราะว่า</p>
                <p>เธอคือคนพิเศษของเค้า</p>
                <motion.p
                  className="inline-block ml-[22px]"
                  initial={{ rotate: 0, scale: 1 }}
                  animate={rotateSmiley ? { rotate: 90, scale: 1.3 } : {}}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{
                    display: "inline-block",
                    transformOrigin: "center",
                    fontSize: "1.2em",
                    paddingLeft: "6px",
                  }}
                >
                  :)
                </motion.p>
              </motion.div>
            )}

            {step === 8 && (
              <motion.p
                key="hope"
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                หวังว่าเธอจะชอบนะงับ
              </motion.p>
            )}
          </div>

          {/* Envelope Appears Centered */}
          {step === 9 && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center w-full h-full backdrop-blur-sm z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onClick={() => setIsOpen(true)}
            >
              {/* Romantic Guidance Text */}
              {!isOpen && (
                <motion.p
                  className="absolute top-40 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl text-white italic text-center px-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    textShadow: "0 0 5px rgba(255,255,255,0.5)"
                  }}
                >
                  กดเปิดดู<br></br>จดหมายรัก Created by บ.โบ้ทได้เลย 💌 😎
                </motion.p>
              )}
              {/* Envelope Base */}
              <motion.div
                className="relative w-[280px] h-[200px] md:w-[420px] md:h-[270px] bg-[#EAD7A5] rounded-lg shadow-xl border-2 border-yellow-600 flex items-center justify-center mx-auto cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                animate={{
                  rotateX: isOpen ? -180 : 0,
                  scale: isOpen ? 0.8 : 1,
                  y: isOpen ? -50 : 0
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Envelope Flap */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1/2 bg-[#DFC48D] border-b-2 border-yellow-600 origin-top"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    backfaceVisibility: "hidden"
                  }}
                />

                {/* Wax Seal (Heart Stamp) */}
                <motion.div
                  className="absolute inset-x-0 mx-auto bottom-[35%] w-12 h-12 md:w-16 md:h-16 bg-red-700 rounded-full flex items-center justify-center border-2 border-red-900 shadow-lg"
                  animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <FaHeart className="text-white text-2xl md:text-3xl animate-pulse" />
                </motion.div>
              </motion.div>

              {/* Love Letter (Appears when clicked) */}
              {isOpen && (
                <motion.div
                  className="fixed transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] md:max-w-[360px] z-10"
                  initial={{ y: 100, opacity: 0, rotateX: 180 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="w-full bg-[#FFF8E7] shadow-2xl rounded-lg px-4 py-8 border-2 border-yellow-600/30 text-center transform hover:scale-105 transition-transform duration-300 relative">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">ถึง..แพรวาที่ดั๊กก</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 px-4">
                      สามปีแล้วน้าาา ที่เราคบกันมา เวลาผ่านไปไวมาก ยังจำวันแรกที่เราเจอกันได้อยู่เลย เล่ากี่ทีก็ตลกเหมือนเดิม 555 เราสองคนก็เติบโตกันขึ้นเยอะเลยเนาะ โดยเฉพาะเธอ เธอโตขึ้นมากๆ เป็นผู้ใหญ่ขึ้นมากๆ เธอสอนอะไรหลายๆอย่างในชีวิตให้เค้าเยอะแยะไปหมด มองย้อนกลับไปแล้วเค้าภูมิใจในตัวเธอมากๆ เลยนะงับ ภูมิใจมากๆที่มีเธอเป็นแฟนด้วย  และก็อยากให้รู้ไว้ว่า...  เธอเก่งมากๆ เก่งที่สุดในโลกเลย                </p>
                    <p className="text-pink-500 font-bold text-lg md:text-xl mt-6">คนเก่งของเค้า :)</p>
                    <motion.button
                      className="mt-8 bg-pink-300/20 hover:bg-pink-300/30 text-pink-500 px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-300 flex items-center gap-2 backdrop-blur-lg mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onComplete()}
                    >
                      <FaHeart></FaHeart> ไปกันต่อเล้ยยยย...<FaArrowRight className="text-pink-500" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}