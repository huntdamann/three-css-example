"use client";

import Image from "next/image";
import { PiChatsFill, PiMapPinFill, PiPhoneFill } from "react-icons/pi";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CiPower } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import { ImMagicWand } from "react-icons/im";
import { GiStrawberry } from "react-icons/gi";
import { GiGrapes } from "react-icons/gi";
import { GiLemon } from "react-icons/gi";
import { IoMdWine } from "react-icons/io";
import { BsBadge3D } from "react-icons/bs";
import { FaRegImages } from "react-icons/fa";



import Color from './Color';



export default function Controls({ openMenu, setter, setterProduct }) {

    const variants = {
        visible: {
          opacity: 1,
          y: -80,
          pointerEvents: "auto",
          transition: { duration: 0.3 }
        },
        hidden: {
          opacity: 0,
          y: 0,
          pointerEvents: "none",  // prevents clicking when hidden
          transition: { duration: 0.3 }
        }
      };
      const revealVariants = {
        visible: {
          opacity: 1,
          pointerEvents: "auto",
          transition: { duration: 0.3 }
        },
        hidden: {
          opacity: 0,
          pointerEvents: "none",  // prevents clicking when hidden
          transition: { duration: 0.3 }
        }
      };
      const colorSwatchRef = useRef(null)
      const [ options, setOptions ] = useState("")
      const [colorSelect, setColorSelect] = useState(false)
      const [saberSelect, setSaberSelect] = useState(false)
      const [isSelected, setIsSelected] = useState(false)
      const [isWandSelected, setIsWandSelected] = useState(false)
      const [selectedProduct, setSelectedProduct] = useState(1)

     

    return (

        <motion.div variants={revealVariants} animate={openMenu ? "visible" : "hidden"} exit="hidden"  className='ui-container'> 


{/* COLOR SELECT PANEL */}
<motion.div
  variants={variants}
  initial="hidden"
  animate={colorSelect ? "visible" : "hidden"}
  className="ui-elements"
>
  <div onClick={() => setter("green")} className="buttons"><Color color={"green"} icon={<GiStrawberry />} /></div>
  <div onClick={() => setter("purple")} className="buttons"><Color color={"purple"} icon={<GiGrapes />} /></div>
</motion.div>

{/* SABER SELECT PANEL */}
<motion.div
  variants={variants}
  initial="hidden"
  animate={saberSelect && openMenu ? "visible" : "hidden"}
  className="ui-elements"
>
  <div onClick={() => setterProduct(1)} className="buttons active:scale-95"><span>1</span></div>
  <div onClick={() => setterProduct(0)} className="buttons active:scale-95"><span>2</span></div>
  <div onClick={() => setterProduct(2)} className="buttons active:scale-95"><span>3</span></div>
</motion.div>

{/* MAIN UI BUTTONS */}
<div className="ui-elements">
  <div className="buttons">
    <BsBadge3D />

  </div>

  <div
    ref={colorSwatchRef}
    onClick={() => {
      setColorSelect(!colorSelect)
      setSaberSelect(false)
      setOptions("color-select")
      setIsSelected(!isSelected)
    }}
    className={` buttons color-swatch ${isSelected && options === "color-select" ? "selected" : ""}`}
  >
    <IoIosColorPalette />
  </div>

  <div
    onClick={() => {
      setSaberSelect(!saberSelect)
      setColorSelect(false)
      setOptions("model-select")
      setIsWandSelected(!isWandSelected)

    }}
    className={`buttons ${isWandSelected && options === "model-select" ? "selected" : ""}`}
  >
    <FaRegImages />

  </div>
</div>
</motion.div>
    )


}


