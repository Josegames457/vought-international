import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const realWorld = [
  { title: "THE BOYS", image: "/series/theboys.jpg" },
  { title: "GEN V", image: "/series/genv.jpg" },
  { title: "THE BOYS: DIABOLICAL", image: "/series/diabolical.jpg" },
  { title: "VOUGHT RISING", image: "/series/voughtrising.jpg" },
  { title: "THE BOYS: MEXICO", image: "/series/mexico.jpg" },
];

const voughtContent = [

  { title: "Ghosts of Hanoi", image: "/series/ghostsofhanoi.jpg" },
  { title: "Hero Seeking Hero", image: "/series/heroseekinghero.jpg" },
  { title: "The Curse of Fu Manchu", image: "/series/fumanchu.jpg" },
  { title: "The Bombsight Brigade", image: "/series/bombsightbrigade.jpg" },
  { title: "Air Raid at 08 Hundred", image: "/series/airraid.jpg" },
  { title: "Moonshine Thunder!", image: "/series/moonshinethunder.jpg" },
  { title: "Savior of Saipan", image: "/series/saipan.jpg" },
  { title: "Merchant Mariner", image: "/series/merchantmariner.jpg" },
  { title: "Midnight at Midway", image: "/series/midway.jpg" },
  { title: "Crimson", image: "/series/crimson.jpg" },
  { title: "Crimson Countess", image: "/series/crimsoncountess.jpg" },
  { title: "Whiskey Sunrise", image: "/series/whiskeysunrise.jpg" },
  { title: "Golden Tapes: The Forgotten Interviews", image: "/series/goldentapes.jpg" },
  { title: "This Means Noir (1979)", image: "/series/thismeansnoir.jpg" },
  { title: "Black Noir: Insurrection (2019)", image: "/series/noirinsurrection.jpg" },
  { title: "Black Noir 3: Back to Hanoi", image: "/series/noirhanoi.jpg" },
  { title: "Phantom Kill", image: "/series/phantomkill.jpg" },
  { title: "Payback", image: "/series/payback.jpg" },
  { title: "Red Thunder (1983)", image: "/series/redthunder.jpg" },
  { title: "Red Thunder 2", image: "/series/redthunder2.jpg" },
  { title: "Area 51", image: "/series/area51.jpg" },
  { title: "Area 52", image: "/series/area52.jpg" },
  { title: "Area 53", image: "/series/area53.jpg" },
  { title: "Area 51: Reborn", image: "/series/area51reborn.jpg" },
  { title: "The Mesmerizer", image: "/series/mesmerizer.jpg" },
  { title: "Y2KAOS", image: "/series/y2kaos.jpg" },
  { title: "Light & Shadow: Journey Into Night", image: "/series/lightshadow.jpg" },
  { title: "Homelander: Brightest Night", image: "/series/brightestnight.jpg" },
  { title: "Homelander: Justice Served", image: "/series/justiceserved.jpg" },
  { title: "Translucent: Invisible Force 2", image: "/series/invisibleforce2.jpg" },
  { title: "The Deep: Rising Tide", image: "/series/risingtide.jpg" },
  { title: "Not Without My Dolphin: The Movie", image: "/series/dolphinmovie.jpg" },
  { title: "The Deep: Secrets of Atlantis", image: "/series/atlantis.jpg" },
  { title: "Training A-Train", image: "/series/trainingatrain.jpg" },
  { title: "A-Train: Into the Multiverse", image: "/series/atrainmultiverse.jpg" },
  { title: "Citizen Starlight", image: "/series/citizenstarlight.jpg" },
  { title: "Nubian Prince", image: "/series/nubianprince.jpg" },
  { title: "The Tek Knight", image: "/series/tekknight.jpg" },
  { title: "Dawn of the Seven", image: "/series/dawnoftheseven.jpg" },
  { title: "Defending Christmas", image: "/series/defendingchristmas.jpg" },
  { title: "Firecracker: Red, White, and Boom!", image: "/series/firecracker.jpg" },
  { title: "Doctor Peculiar", image: "/series/doctorpeculiar.jpg" },
  { title: "Groundhawk", image: "/series/groundhawk.jpg" },
  { title: "Oh Father: The Musical", image: "/series/ohfather.jpg" },
  { title: "Flipped", image: "/series/flipped.jpg" },
  { title: "The Last Round", image: "/series/lastround.jpg" },
  { title: "Super School", image: "/series/superschool.jpg" },
  { title: "Queen Maeve: Her Majesty", image: "/series/hermajesty.jpg" },

];

export default function Series() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="relative py-32 px-6 border-b border-zinc-900 overflow-hidden">

        <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <img
            src="/logos/vought-white.png"
            alt="Vought"
            className="w-24 mx-auto mb-8 opacity-80"
          />

          <p className="uppercase tracking-[0.5em] text-blue-400 text-sm mb-4">
            Vought Entertainment
          </p>

          <h1 className="text-6xl md:text-8xl font-black">
            SERIES Y PELICULAS
          </h1>

          <p className="text-zinc-400 mt-8 max-w-3xl mx-auto text-lg">
            Catálogo oficial de vought Entertainment y archivo del universo cinematográfico de Vought.
          </p>

        </div>

      </section>

      {/* REAL WORLD */}

      <section className="py-24 px-6 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <h2 className="text-4xl font-black text-red-500">
              SERIES REALES
            </h2>

            <p className="text-zinc-500 mt-3 uppercase tracking-[0.3em] text-sm">
              Producciones No-Vought
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {realWorld.map((show, index) => {

  const routes = {
    "THE BOYS": "/theboys",
    "GEN V": "/genv",
    "THE BOYS: DIABOLICAL": "/diabolical",
    "VOUGHT RISING": "/voughtrising",
    "THE BOYS: MEXICO": "/theboysmexico",
  };

  return (
    <Link to={routes[show.title] || "#"} key={index}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
        className="
          bg-zinc-950
          border border-red-900/40
          rounded-3xl
          overflow-hidden
          hover:border-red-500
          transition-all duration-500
          cursor-pointer
        "
      >

        <img
          src={show.image}
          alt={show.title}
          className="
            w-full
            h-[650px]
            object-cover
            transition-transform duration-700
            hover:scale-105
          "
        />

        <div className="p-6">

          <div className="flex justify-between items-center mb-5">

            <span className="text-red-500 text-xs uppercase tracking-[0.3em]">
              AMAZON ORIGINAL
            </span>

            <span className="border border-red-500/40 text-red-400 text-xs px-3 py-1 rounded-full"> {show.title === "THE BOYS: DIABOLICAL" ? "ANIMATED" : "LIVE ACTION"} </span>

          </div>

          <h3 className="text-3xl font-black">
            {show.title}
          </h3>

        </div>

      </motion.div>
    </Link>
  );

})}

          </div>

        </div>

      </section>

      {/* VOUGHT CONTENT */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <h2 className="text-4xl font-black text-blue-400">
              ORIGINALS DE VOUGHT
            </h2>

            <p className="text-zinc-500 mt-3 uppercase tracking-[0.3em] text-sm">
              Propiedades oficiales de Vought Entertainment
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            {voughtContent.map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.03 }}
                className="
                  bg-zinc-950
                  border border-zinc-800
                  rounded-3xl
                  overflow-hidden
                  hover:border-blue-500
                  transition-all duration-500
                "
              >

                <img
                  src={show.image}
                  alt={show.title}
                  className="
                    w-full
                    h-[520px]
                    object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />

                <div className="p-5">

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-blue-400 text-xs uppercase tracking-[0.3em]">
                      VOUGHT+
                    </span>

                    <span className="border border-blue-500/40 text-blue-400 text-xs px-3 py-1 rounded-full">
                      ORIGINAL
                    </span>

                  </div>

                  <h3 className="text-xl font-black leading-tight">
                    {show.title}
                  </h3>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}