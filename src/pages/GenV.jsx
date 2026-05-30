import { useState } from "react";
import { motion } from "framer-motion";

const seasons = [
  {
    season: "TEMPORADA 1",
    poster: "/genv/s1.jpg",

    episodes: [
      "God U.",
      "First Day",
      "#ThinkBrink",
      "The Whole Truth",
      "Welcome to the Monster Club",
      "Jumanji",
      "Sick",
      "Guardians of Godolkin",
    ],
  },

  {
    season: "TEMPORADA 2",
    poster: "/genv/s2.jpg",

    episodes: [
      "New Year, New U",
      "Justice Never Forgets",
      "H is for Human",
      "Bags",
      "The Kids Are Not All Right",
      "Cooking Lessons",
      "Hell Week",
      "Trojan",
    ],
  },
];

export default function GenV() {

  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <div className="bg-[#080b14] text-white min-h-screen overflow-hidden relative">

      
      <div className="fixed top-[-250px] left-[-250px] w-[700px] h-[700px] bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="fixed bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-yellow-400/10 blur-[160px] rounded-full"></div>

      
      <div className="fixed inset-0 -z-10">

        <img
          src={selectedSeason.poster}
          alt="Gen V"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#05070d]/85"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black/60 to-black"></div>

      </div>

      
      <section className="relative px-6 pt-32 pb-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          
          <motion.img
            key={selectedSeason.poster}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={selectedSeason.poster}
            alt="Gen V"
            className="
              w-full
              max-w-[500px]
              rounded-3xl
              border border-blue-500/20
              shadow-[0_0_80px_rgba(59,130,246,0.15)]
            "
          />

          
          <div>

            <span className="text-yellow-400 uppercase tracking-[0.4em] text-sm">
              GODOLKIN UNIVERSITY
            </span>

            <h1 className="
              text-7xl md:text-8xl
              font-black
              mt-6
              leading-none
              tracking-tight
            ">
              GEN V
            </h1>

            <p className="text-blue-300 uppercase tracking-[0.5em] text-xs mt-6">
              YOUNG SUPES • CAMPUS LIFE • COMPETITION • POWER
            </p>

            <p className="text-zinc-300 mt-8 text-lg leading-relaxed max-w-2xl">
              En Godolkin University, jóvenes Supes compiten por convertirse
              en la próxima generación de héroes de Vought mientras secretos
              oscuros amenazan con destruir el campus.
            </p>

            
            <div className="flex gap-4 mt-10 flex-wrap">

              <button className="
                bg-yellow-400
                text-black
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(250,204,21,0.4)]
                transition-all
                px-8 py-4 rounded-2xl font-black
              ">
                VER AHORA
              </button>

              <button className="
                border border-blue-500/30
                hover:border-blue-400
                hover:bg-blue-500/10
                transition-all
                px-8 py-4 rounded-2xl font-black
              ">
                TRAILER
              </button>

            </div>

            
            <div className="flex gap-3 mt-14 flex-wrap">

              {seasons.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedSeason(item)}
                  className={`
                    px-6 py-3 rounded-2xl font-bold transition-all
                    ${
                      selectedSeason.season === item.season
                        ? "bg-yellow-400 text-black"
                        : "bg-[#101522] hover:bg-[#1a2233]"
                    }
                  `}
                >
                  {item.season}
                </button>

              ))}

            </div>

          </div>

        </div>

      </section>

      
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="mb-10">

            <h2 className="text-4xl font-black">
              {selectedSeason.season}
            </h2>

            <p className="text-blue-300 mt-3 uppercase tracking-[0.3em] text-sm">
              GODOLKIN UNIVERSITY ARCHIVES
            </p>

          </div>

          <div className="grid gap-5">

            {selectedSeason.episodes.map((episode, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className="
                  border border-blue-500/10
                  bg-[#0f1522]/80
                  backdrop-blur-md
                  rounded-3xl
                  p-6
                  hover:border-yellow-400/40
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]
                  transition-all
                "
              >

                <div className="flex items-center justify-between flex-wrap gap-5">

                  <div>

                    <p className="text-yellow-400 text-sm uppercase tracking-widest">
                      Episode {index + 1}
                    </p>

                    <h3 className="text-2xl font-black mt-2">
                      {episode}
                    </h3>

                  </div>

                  <div className="flex gap-3">

                    <button className="
                      bg-yellow-400
                      text-black
                      px-5 py-2 rounded-xl
                      font-black
                      hover:scale-105
                      transition-all
                    ">
                      VER AHORA
                    </button>

                    <button className="
                      border border-blue-500/30
                      px-5 py-2 rounded-xl
                      hover:border-yellow-400
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