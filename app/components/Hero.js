"use client";

import { motion, AnimatePresence } from "motion/react";
import Controls from './ControlPanel';
import { useState } from "react";

export default function Hero({ color, setter }) {
  const items = [1, 2, 3, 4];
  const [picture_no, setPictureNo ] = useState(1);
  const [open, setOpen] = useState(false)

  return (
    <section className="flex bg-black text-white min-h-screen overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key="banner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="banner w-full flex flex-col items-center"
        >
          {/* Rotating Image Slider */}
          <div className="slider relative sm" style={{ "--quantity": 4 } }>
            {items.map((pos) => (
              <div
                key={pos}
                className="item relative w-[150px] h-[150px]"
                style={{ "--position": pos } }
              >
                {picture_no === 1 && (
                    <>
                      <img
                        src="/image.png"
                        alt="green"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          color === "green" ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <img
                        src="/image1.png"
                        alt="other"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          color === "green" ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </>
                )}
                {picture_no === 0 && (
                    <>
                      <img
                        src="/green_diamon.png"
                        alt="green"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          color === "green" ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <img
                        src="/green_diamon.png"
                        alt="other"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          color === "green" ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </>
                )}
                {picture_no === 2 && (
                    <>
                      <img
                        src="/green_ruby.png"
                        alt="green"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          color === "green" ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <img
                        src="/purple_ruby.png"
                        alt="other"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          color === "green" ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </>
                )}

                {/* Overlay two images for smooth fade */}
                
              </div>
            ))}
          </div>

          {/* Text Content */}
         <div className="content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`text-4xl font-bold transition-colors duration-500 ${
                color === "green" ? "text-green-500" : "text-purple-500"
              }`}
            >
              THREEJS + CSS
            </motion.h1>

            <Controls openMenu={open} setter={setter} setterProduct={setPictureNo} />

            <motion.div
              className="flex gap-6 mt-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <button
                className={`rounded-2xl p-2 w-[7rem] border active:scale-95 transition-colors duration-500 ${
                  color === "green"
                    ? "bg-green-500 border-green-500 hover:bg-black"
                    : "bg-purple-500 border-purple-500 hover:bg-black"
                }`}
                onClick={() => setOpen(prev => !prev)}
              >
                Controls
              </button>
            </motion.div>
          </div> 
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
