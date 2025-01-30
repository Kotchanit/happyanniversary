"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useRef } from "react";

interface SeccondSectionProps {
    onComplete: () => void;
  }
  
export default function SecondSection({ onComplete } : SeccondSectionProps) {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const { scrollY } = useScroll();
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.3,
        margin: "0px 0px -200px 0px"
    });

    const flyUp = useTransform(scrollY, [300, 600], [0, -100]);
    const rotatedaisy = useTransform(scrollY, [300, 600], [0, 360]);

    const anniversaryText = [
        "สามปีแห่งความมหัศจรรย์ของเรา...",
        "16 กุมภาพันธ์ 2567 - ช่วงเวลาพิเศษของเรา",
        "1095 วันแห่งความทรงจำอันแสนหวาน",
        "ช่วงเวลาแห่งความสุขและความรักที่นับไม่ถ้วน",
        "ทุกวันพี่รักหนูมากขึ้นเรื่อยๆ",
        "หนูคือการผจญภัยที่ยิ่งใหญ่ที่สุดของพี่",
        "ครบรอบ 3 ปีแห่งความรัก ที่รักของพี่!",
    ];

    const typingText = "สามปีที่แล้ว หนูทำให้พี่เป็นคนที่มีความสุขที่สุดด้วยการเลือกที่จะแบ่งปันชีวิตกับพี่ ทุกวันตั้งแต่นั้นมาคือบทที่สวยงามในนิยายรักของเรา พี่หวงแหนทุกรอยยิ้ม ทุกเสียงหัวเราะ และทุกช่วงเวลาที่เราสร้างด้วยกัน ขอให้เรามีความสุขด้วยกันอีกหลายๆ ปี!";

    return (
        <div className="w-full min-h-screen bg-black">
            <motion.div
                ref={sectionRef}
                className="w-full min-h-screen flex flex-col items-center justify-center relative px-4 py-8 md:p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center w-full max-w-4xl mx-auto px-3 md:px-8"
                >
                    {/* Text Animation */}
                    <div className="text-center max-w-3xl mx-auto bg-black/30 p-4 md:p-6 rounded-lg backdrop-blur-lg mt-2 md:mt-4 mb-6 md:mb-12 h-[80px] md:h-[72px] flex items-center justify-center overflow-hidden absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        {anniversaryText.map((line, index) => (
                            <motion.p
                                key={index}
                                className="text-base md:text-xl text-pink-300/90 font-light absolute px-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isInView ? [0, 1, 1, 0] : 0,
                                    y: isInView ? [20, 0, 0, -20] : 20,
                                    transition: {
                                        times: [0, 0.1, 0.9, 1],
                                        duration: 4,
                                        delay: index * 4,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pointerEvents: "none"
                                }}
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>

                    {/* Celebration Message Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                            transition: {
                                delay: anniversaryText.length * 4 + 0.5,
                                duration: 0.8
                            }
                        }}
                        className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-black px-4 py-8 md:p-8 mt-32"
                    >
                        {/* Text Box */}
                        <motion.div
                            ref={textRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                y: isInView ? 0 : 20,
                                transition: {
                                    delay: anniversaryText.length * 4 + 0.8,
                                    duration: 0.8
                                }
                            }}
                            className="bg-black/40 border border-pink-300/50 p-6 md:p-8 rounded-xl backdrop-blur-lg max-w-3xl mx-auto w-full shadow-lg"
                        >
                            <motion.p className="text-sm md:text-xl text-pink-300/90 drop-shadow-sm font-extralight leading-relaxed md:leading-loose text-left">
                                {typingText.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: isInView ? 1 : 0,
                                            transition: {
                                                duration: 0.1,
                                                delay: (anniversaryText.length * 4 + 2.0) + index * 0.05
                                            }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>

                        {/* Button */}
                        <motion.button
                            className="mt-8 bg-pink-300/20 hover:bg-pink-300/30 text-pink-300/90 px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-300 flex items-center gap-2 backdrop-blur-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                scale: isInView ? 1 : 0.8,
                                transition: {
                                    delay: anniversaryText.length * 4 + 1.2,
                                    duration: 0.5
                                }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                if (onComplete) {
                                    onComplete();
                                }
                            }}
                        >
                            Send <FaHeart className="text-pink-300/90" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}