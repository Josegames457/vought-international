import { useState } from "react";
import { motion } from "framer-motion";

const seasons = [
  {
    season: "OPERACIÓN NORTE",
    poster: "/theboysmexico/s1.jpg",
    episodes: [
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
      "N/A",
    ],
  },
];

export default function TheBoysMexico() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* GLOW MIX: ROJO + VERDE MILITAR */}
      <div className="fixed top-[-250px] left-[-250px] w-[700px] h-[700px] bg-red-600/20 blur-[170px] rounded-full" />
      <div className="fixed bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-green-500/10 blur-[170px] rounded-full" />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src={selectedSeason.poster}
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/20 to-black" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* POSTER */}
          <motion.img
            key={selectedSeason.poster}
            src={selectedSeason.poster}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="
              w-full max-w-[450px]
              rounded-3xl
              border border-green-500/20
              shadow-[0_0_80px_rgba(34,197,94,0.12)]
            "
          />

          {/* INFO */}
          <div>

            <span className="uppercase tracking-[0.5em] text-sm text-green-400">
              VOUGHT LATIN AMERICA DIVISION
            </span>

            <h1 className="text-7xl font-black mt-6 leading-none">
              THE BOYS: MÉXICO
            </h1>

            {/* TAGLINE */}
            <p className="uppercase tracking-[0.5em] text-sm text-red-400 mt-4">
              CONTROL • TERRITORIO • PROPAGANDA • PODER
            </p>

            <p className="text-zinc-300 mt-6 max-w-2xl leading-relaxed">
              La expansión de Vought en Latinoamérica convierte a los Supes en herramientas
              de control territorial. México se convierte en un punto estratégico donde la
              propaganda, el crimen y la política se mezclan sin límites.
            </p>

            {/* BOTONES */}
            <div className="flex gap-4 mt-10 flex-wrap">

              <button className="
                bg-green-500
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
                border border-green-500/30
                px-8 py-4
                rounded-2xl
                font-black
                hover:bg-green-500/10
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
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black mb-10 text-green-400">
            N/A
          </h2>

          <div className="grid gap-5">

            {selectedSeason.episodes.map((ep, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="
                  p-6 rounded-3xl
                  bg-zinc-900/60
                  border border-green-500/10
                  backdrop-blur-md
                  transition-all
                "
              >

                <div className="flex justify-between items-center flex-wrap gap-4">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-green-400">
                      Operation {i + 1}
                    </p>

                    <h3 className="text-xl font-black mt-1">
                      {ep}
                    </h3>
                  </div>

                  <div className="flex gap-3">

                    <button className="
                      bg-green-500
                      text-black
                      px-5 py-2 rounded-xl
                      font-black
                      hover:scale-105
                      transition-all
                    ">
                      VER AHORA
                    </button>

                    <button className="
                      border border-green-500/30
                      px-5 py-2 rounded-xl
                      font-black
                      hover:bg-green-500/10
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