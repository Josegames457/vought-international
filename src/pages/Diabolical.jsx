import { useState } from "react";
import { motion } from "framer-motion";


const episodes = [
  "Laser Baby's Day Out",
  "An Animated Short Where Pissed-Off Supes Kill Their Parents",
  "Boyd in 3D",
  "Nubian vs Nubian",
  "BFFs",
  "John and Sun-Hee",
  "I'm Your Pusher",
  "One Plus One Equals Two",
];

const moods = [
  "rgba(34,211,238,0.25)",
  "rgba(239,68,68,0.25)",
  "rgba(34,197,94,0.25)",
  "rgba(250,204,21,0.25)",
  "rgba(59,130,246,0.25)",
  "rgba(249,115,22,0.25)",
  "rgba(255,255,255,0.12)",
  "rgba(236,72,153,0.20)",
];

export default function Diabolical() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGlow = moods[activeIndex];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      
      <div
        className="fixed top-[-200px] left-[-200px] w-[650px] h-[650px] blur-[160px] rounded-full"
        style={{ background: activeGlow }}
      />

      <div
        className="fixed bottom-[-200px] right-[-200px] w-[650px] h-[650px] blur-[160px] rounded-full"
        style={{ background: activeGlow }}
      />

      
      <div className="fixed inset-0 -z-10 bg-black">
        <div
          className="absolute inset-0 opacity-20 transition-all duration-500"
          style={{
            background: `radial-gradient(circle, ${activeGlow} 0%, transparent 70%)`,
          }}
        />
      </div>

      
<section className="px-6 pt-32 pb-16">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    
    <motion.img
      src="/diabolical/s1.jpg"
      alt="Diabolical"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="
        w-full max-w-[450px]
        rounded-3xl
        border border-white/10
        shadow-[0_0_60px_rgba(255,255,255,0.08)]
      "
    />

    
    <div>

      <span className="uppercase tracking-[0.5em] text-sm opacity-70">
        VOUGHT ANIMATION ARCHIVE
      </span>

      <h1 className="text-7xl font-black mt-6 leading-none">
        DIABOLICAL
      </h1>

      
      <p className="text-sm uppercase tracking-[0.5em] text-zinc-400 mt-4">
        ANIMATED SUPES • MULTIPLE STYLES • DARK HUMOR • ANTHOLOGY CHAOS
      </p>

      
      <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed">
        Una colección de historias animadas dentro del universo de The Boys.
        Cada episodio tiene su propio estilo, tono y locura visual.
      </p>

      
      <div className="flex gap-4 mt-10 flex-wrap">

        <button className="
          bg-white
          text-black
          px-8 py-4
          rounded-2xl
          font-black
          hover:scale-105
          transition-all
        ">
          VER AHORA
        </button>

        <button className="
          border border-white/20
          px-8 py-4
          rounded-2xl
          font-black
          hover:bg-white/10
          transition-all
        ">
          TRAILER
        </button>

      </div>

    </div>

  </div>
</section>

      
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-5">

          {episodes.map((ep, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="
                p-6 rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                cursor-pointer
                transition-all
              "
              style={{
                borderColor:
                  activeIndex === i
                    ? activeGlow
                    : "rgba(255,255,255,0.1)",
              }}
            >

              <div className="flex justify-between items-center flex-wrap gap-4">

                <div>
                  <p className="text-xs opacity-60 uppercase tracking-widest">
                    Episode {i + 1}
                  </p>

                  <h3 className="text-xl font-black mt-1">
                    {ep}
                  </h3>
                </div>

                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: activeGlow }}
                />

              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}