import { useState } from "react";
import { motion } from "framer-motion";

const seasons = [
  {
    season: "PROPAGANDA ERA",
    poster: "/voughtrising/s1.jpg",
    episodes: [
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "N/A  ",
      "N/A",
      "N/A",
      "N/A",
    ],
  },
];

export default function VoughtRising() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <div className="min-h-screen text-[#2b1d14] relative overflow-hidden bg-[#f5e6c8]">

      {/* PAPER GLOW / VINTAGE LIGHT */}
      <div className="fixed top-[-200px] left-[-200px] w-[700px] h-[700px] bg-yellow-200/30 blur-[160px] rounded-full" />
      <div className="fixed bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-red-300/20 blur-[160px] rounded-full" />

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <img
          src={selectedSeason.poster}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#f5e6c8]/80" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* POSTER */}
          <motion.img
            key={selectedSeason.poster}
            src={selectedSeason.poster}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="
              w-full max-w-[450px]
              rounded-xl
              border-4 border-[#8b5e3c]/40
              shadow-[0_0_60px_rgba(139,94,60,0.2)]
            "
          />

          {/* INFO */}
          <div>

            <span className="uppercase tracking-[0.5em] text-sm text-[#8b5e3c]">
              VOUGHT INTERNATIONAL ARCHIVES
            </span>

            <h1 className="text-7xl font-black mt-6 leading-none">
              VOUGHT RISING
            </h1>

            {/* TAGLINE (50s STYLE) */}
            <p className="uppercase tracking-[0.5em] text-sm text-[#6b4a33] mt-4">
              HEROISM • UNITY • PROGRESS • AMERICA
            </p>

            <p className="text-[#4a3324] mt-6 max-w-2xl leading-relaxed">
              En la era dorada de Vought, la creación de los Supes es presentada como el mayor avance
              de la humanidad. Una visión perfecta de orden, patriotismo y progreso… cuidadosamente construida.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10 flex-wrap">

              <button className="
                bg-[#8b5e3c]
                text-white
                px-8 py-4
                rounded-xl
                font-black
                hover:scale-105
                transition-all
              ">
                VER AHORA
              </button>

              <button className="
                border border-[#8b5e3c]/40
                px-8 py-4
                rounded-xl
                font-black
                hover:bg-[#8b5e3c]/10
                transition-all
              ">
                TRAILER
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* EPISODES */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-black mb-10 text-[#4a3324]">
            ARCHIVED BROADCASTS
          </h2>

          <div className="grid gap-5">

            {selectedSeason.episodes.map((ep, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="
                  p-6 rounded-xl
                  bg-[#fff6e0]/40
                  border border-[#8b5e3c]/20
                  backdrop-blur-md
                  transition-all
                "
              >

                <div className="flex justify-between items-center flex-wrap gap-4">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#8b5e3c]">
                      Broadcast {i + 1}
                    </p>

                    <h3 className="text-xl font-black mt-1 text-[#2b1d14]">
                      {ep}
                    </h3>
                  </div>

                  <div className="flex gap-3">

                    <button className="
                      bg-[#8b5e3c]
                      text-white
                      px-5 py-2 rounded-lg
                      font-black
                      hover:scale-105
                      transition-all
                    ">
                      VER AHORA
                    </button>

                    <button className="
                      border border-[#8b5e3c]/40
                      px-5 py-2 rounded-lg
                      font-black
                      hover:bg-[#8b5e3c]/10
                      transition-all
                    ">
                      DETALLES
                    </button>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}