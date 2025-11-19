"use client";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Scene from "./components/canvas/Scene";

export default function Home() {
  const [color, setColor] = useState("purple");

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* SCENE LAYER */}
      <section 
        className="scene-container"
      >
        <Scene color={color} setter={setColor} />
      </section>

      {/* HERO LAYER */}
      <div className="relative">
        <Hero color={color} setter={setColor} />
      </div>

    </main>
  );
}
