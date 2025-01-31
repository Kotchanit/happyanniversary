"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function ThirdSection() {
  const { scrollY } = useScroll();
  const rotateLeft = useTransform(scrollY, [600, 900], [0, -360]);
  const rotateRight = useTransform(scrollY, [600, 900], [0, 360]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#F7A6C4] relative px-3 py-4 md:px-8 md:py-8 gap-4 md:gap-8">
      <div className="absolute top-8 md:top-16 left-1/4 transform -translate-x-1/2">
        <motion.div style={{ rotate: rotateLeft }} className="w-20 h-28 md:w-28 md:h-36 relative">
          <Image
            src="/pink-rose.svg"
            alt="Pink Rose"
            fill
            style={{ objectFit: 'contain', opacity: 0.8 }}
          />
        </motion.div>
      </div>
      <div className="absolute top-8 md:top-16 right-1/4 transform translate-x-1/2">
        <motion.div style={{ rotate: rotateRight }} className="w-20 h-28 md:w-28 md:h-36 relative">
          <Image
            src="/pink-rose.svg"
            alt="Pink Rose"
            fill
            style={{ objectFit: 'contain', opacity: 0.8 }}
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-5xl font-medium text-center text-[#F7A6C4] tracking-normal px-2"
      >
        สุขสันต์วันครบรอบ!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-sm md:text-xl text-center text-[#F7A6C4]/90 max-w-2xl font-extralight leading-loose px-3 md:px-0"
      >
        สามปีแห่งความสุขและความรักที่ไม่มีที่สิ้นสุด ทุกช่วงเวลากับหนูคือของขวัญล้ำค่า พี่ตั้งตารอที่จะสร้างความทรงจำที่สวยงามกับหนูอีกมากมาย หนูทำให้ชีวิตพี่สมบูรณ์
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-[#F7A6C4]/80 text-3xl md:text-5xl my-6 md:my-8"
      >
        <FaHeart />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full px-3 md:px-4"
      >
        <div className="bg-black/40 border border-[#F7A6C4]/40 p-4 md:p-8 rounded-lg shadow-sm backdrop-blur-sm">
          <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4 text-[#F7A6C4] tracking-wide">การเดินทางของเรา</h2>
          <p className="text-xs md:text-base text-[#F7A6C4]/90 font-extralight leading-loose">
            ตลอดสาคีที่ผ่านมา เราได้แบ่งปันเสียงหัวเราะมากมาย ผ่านพ้นความท้าทายต่างๆ และสร้างความรักที่เติบโตขึ้นทุกวัน การเดินทางร่วมกันของเราช่างวิเศษเหลือเกิน
          </p>
        </div>

        <div className="bg-black/40 border border-[#F7A6C4]/40 p-4 md:p-8 rounded-lg shadow-sm backdrop-blur-sm">
          <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4 text-[#F7A6C4] tracking-wide">อนาคตของเรา</h2>
          <p className="text-xs md:text-base text-[#F7A6C4]/90 font-extralight leading-loose">
            ในวันครบรอบสามปีของเรา พี่รู้สึกตื่นเต้นกับการผจญภัยที่รอเราอยู่ข้างหน้า ขอให้เราได้สร้างความฝัน แบ่งปันช่วงเวลาอันมีค่า และรักกันลึกซึ้งยิ่งขึ้นในทุกๆ ปี
          </p>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-8 md:mt-12 text-[#F7A6C4]/80 text-xs md:text-base font-extralight tracking-widest"
      >
        ทำด้วยหัวใจ ❤️ เพื่อหนู
      </motion.footer>
    </div>
  );
}