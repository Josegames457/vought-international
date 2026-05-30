import { useState } from "react";
import { motion } from "framer-motion";

const seasons = [
  {
    season: "TEMPORADA 1",
    poster: "/theboys/s1.jpg",
    episodes: [
      "The Name of the Game",
      "Cherry",
      "Get Some",
      "The Female of the Species",
      "Good for the Soul",
      "The Innocents",
      "The Self-Preservation Society",
      "You Found Me",
    ],
  },

  {
    season: "TEMPORADA 2",
    poster: "/theboys/s2.jpg",
    episodes: [
      "The Big Ride",
      "Proper Preparation and Planning",
      "Over the Hill with the Swords of a Thousand Men",
      "Nothing Like It in the World",
      "We Gotta Go Now",
      "The Bloody Doors Off",
      "Butcher, Baker, Candlestick Maker",
      "What I Know",
    ],
  },

  {
    season: "TEMPORADA 3",
    poster: "/theboys/s3.jpg",
    episodes: [
      "Payback",
      "The Only Man in the Sky",
      "Barbary Coast",
      "Glorious Five Year Plan",
      "The Last Time to Look on This World of Lies",
      "Herogasm",
      "Here Comes a Candle to Light You to Bed",
      "The Instant White-Hot Wild",
    ],
  },

  {
    season: "TEMPORADA 4",
    poster: "/theboys/s4.jpg",
    episodes: [
      "Department of Dirty Tricks",
      "Life Among the Septics",
      "We'll Keep the Red Flag Flying Here",
      "Wisdom of the Ages",
      "Beware the Jabberwock, My Son",
      "Dirty Business",
      "The Insider",
      "Assassination Run",
    ],
  },

   {
    season: "TEMPORADA 5",
    poster: "/theboys/s5.jpg",
    episodes: [
      "Fifteen Inches of Sheer Dynamite",
      "Teenage Kix",
      "Every One of You Sons of Bitches",
      "King of Hell",
      "One-Shots",
      "Though the Heavens Fall",
      "The Frenchman, the Female, and the Man Called Mother's Milk",
      "Blood and Bone",
    ],
  },
];

export default function TheBoys() {

  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  return (
    <div className="bg-[#090909] text-white min-h-screen overflow-hidden relative">
        {/* FILM GRAIN */}
<div
  className="
    pointer-events-none
    fixed inset-0 z-[200]
    opacity-[0.035]
    mix-blend-screen
  "
  style={{
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
  }}
/>

{/* RED GLOW */}
<div className="fixed top-[-300px] left-[-300px] w-[900px] h-[900px] bg-red-700/20 blur-[180px] rounded-full"></div>

<div className="fixed bottom-[-300px] right-[-300px] w-[900px] h-[900px] bg-red-900/10 blur-[180px] rounded-full"></div>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <img
          src={selectedSeason.poster}
          alt="Poster"
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/85"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-red-950/20"></div>

      </div>

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* POSTER */}
          <motion.img
            key={selectedSeason.poster}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={selectedSeason.poster}
            alt="The Boys"
            className="
              w-full
              max-w-[500px]
              rounded-3xl
              border border-zinc-800
              shadow-[0_0_60px_rgba(0,0,0,0.6)]
            "
          />

          {/* INFO */}
          <div>

            <span className="text-red-500 uppercase tracking-[0.4em] text-sm">
              AMAZON ORIGINAL
            </span>

           <h1 className="
  text-7xl md:text-8xl
  font-black
  mt-6
  leading-none
  tracking-tight
  text-white
  drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]
">
              THE BOYS
              <p className="text-red-500 uppercase tracking-[0.5em] text-xs mt-6">
  VIOLENCE • GORE • STRONG LANGUAGE • SEXUAL CONTENT
</p>
            </h1>

            <p className="text-zinc-300 mt-8 text-lg leading-relaxed max-w-2xl">
              Un grupo de vigilantes intenta detener a los superhéroes corruptos
              más poderosos del mundo mientras Vought International controla la
              narrativa global.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10">

              <button className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-xl font-black">
                VER AHORA
              </button>

              <button className="border border-zinc-700 hover:border-red-500 transition-all px-8 py-4 rounded-xl font-black">
                TRAILER
              </button>

            </div>

            {/* SEASONS */}
            <div className="flex gap-3 mt-14 flex-wrap">

              {seasons.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedSeason(item)}
                  className={`
                    px-6 py-3 rounded-xl font-bold transition-all
                    ${
                      selectedSeason.season === item.season
                        ? "bg-red-600 text-white"
                        : "bg-zinc-900 hover:bg-zinc-800"
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

      {/* EPISODES */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="mb-10">

            <h2 className="text-4xl font-black">
              {selectedSeason.season}
            </h2>

            <p className="text-zinc-500 mt-3 uppercase tracking-[0.3em] text-sm">
              Episodios Oficiales
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
                  border border-zinc-800
                  bg-[#111111]/90
                  backdrop-blur-md
                  rounded-2xl
                  p-6
                  hover:border-red-500
                  hover:shadow-[0_0_40px_rgba(255,0,0,0.15)]
                  transition-all
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-zinc-500 text-sm uppercase tracking-widest">
                      Episodio {index + 1}
                    </p>

                    <h3 className="text-2xl font-black mt-2">
                      {episode}
                    </h3>

                  </div>

                  <button className="border border-zinc-700 px-5 py-2 rounded-xl hover:border-red-500 transition-all">
                    DETALLES
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}