import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">


      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/2/AmazonStores/A1F83G8C2ARO7P/0a5eddf220d3cf7a1d9520d9e6fda782.w3000.h1593.jpg')",
          }}
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/40 to-black"></div>

        {/* BLUE GLOW */}
        <div className="absolute top-[-200px] w-[900px] h-[900px] bg-blue-600/20 blur-[200px] rounded-full"></div>

        {/* WATERMARK */}
        <p className="absolute text-[300px] font-black opacity-[0.03] tracking-tight">
          VOUGHT
        </p>

        {/* VOUGHT SYMBOL */}
        <img
          src="/logos/vought-symbol.png"
          alt="Vought"
          className="absolute opacity-[0.06] w-[900px]"
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >

          {/* LOGO */}
<motion.img
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  src="/logos/vought-white.png"
  alt="Vought International"
  className="w-[170px] mx-auto mb-10 opacity-95"
/>

      

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            NOSOTROS PROTEGEMOS
            <span className="block text-blue-500">
              AMERICA
            </span>
          </h1>

          <p className="text-zinc-300 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Vought International continúa liderando el futuro de la seguridad,
            innovación biotecnológica y protección nacional mediante la integración
            estratégica de Supes de élite.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <button
              className="
              bg-blue-600 hover:bg-blue-500
              transition-all duration-500
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
              px-8 py-4 rounded-xl font-bold tracking-wide
              "
            >
              ENTRA A VOUGHT+
            </button>

            <button
              className="
              border border-zinc-700
              hover:border-blue-500
              hover:text-blue-400
              hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
              transition-all duration-500
              hover:scale-105
              px-8 py-4 rounded-xl font-bold tracking-wide
              "
            >
              EXPEDIENTE DE HEROES
            </button>

          </div>

        </motion.div>

      </section>

      {/* STATS */}
      <section className="border-t border-zinc-900 border-b border-zinc-900 bg-zinc-950 relative">

        {/* WATERMARK */}
        <p className="absolute inset-0 flex items-center justify-center text-[220px] font-black opacity-[0.02]">
          VOUGHT
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-14 text-center relative z-10">

          {[
            ["99.7%", "Estabilidad nacional"],
            ["214", "Supes activos"],
            ["43", "Operaciones globales"],
            ["24/7", "Monitoreo de amenazas"],
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="
              backdrop-blur-md
              bg-white/[0.03]
              border border-white/10
              rounded-2xl
              p-8
              hover:border-blue-500
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
              "
            >
              <h2 className="text-5xl font-black text-blue-400">
                {item[0]}
              </h2>

              <p className="text-zinc-400 mt-3 uppercase tracking-widest text-sm">
                {item[1]}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FEATURED HERO */}
      <section className="py-28 px-6 relative overflow-hidden">

        <div className="absolute right-[-100px] top-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/heroes/homelander.jpg"
              alt="Homelander"
              className="
              w-full h-[750px]
              object-cover object-top
              rounded-3xl
              border border-zinc-800
              shadow-[0_0_60px_rgba(59,130,246,0.15)]
              "
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src="/logos/vought-white.png"
              alt="Vought"
              className="w-[180px] mb-8 opacity-60"
            />

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Héroe destacado
            </p>

            <h2 className="text-6xl font-black leading-none">
              HOMELANDER
            </h2>

            <p className="text-zinc-300 mt-8 text-lg leading-relaxed">
              Reconocido mundialmente como el protector definitivo de la nación,
              Homelander lidera The Seven y representa el máximo nivel de poder
              desarrollado por Vought International.
            </p>

            {/* DOSSIER */}
            <div className="mt-10 grid grid-cols-3 gap-4">

              {[
                ["FALLECIDO", "Estado", "text-green-400"],
                ["EXTREMA", "Amenaza", "text-red-400"],
                ["OMEGA", "Autorización", "text-blue-400"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  border border-zinc-800
                  rounded-2xl
                  p-5
                  bg-zinc-950/80
                  backdrop-blur-md
                  "
                >
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">
                    {item[1]}
                  </p>

                  <p className={`font-black mt-2 ${item[2]}`}>
                    {item[0]}
                  </p>
                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-28 px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">

        <div className="absolute left-[-200px] top-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <div className="mb-14">

            <img
              src="/logos/vought-logo.png"
              alt="Vought"
              className="w-[200px] mb-6 opacity-50"
            />

            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Canal de noticias de Vought (VNN)
            </p>

            <h2 className="text-5xl font-black">
              ULTIMAS NOTICIAS
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "ROBERT SINGER ES CONFIRMADO COMO PRESIDENTE DE LOS ESTADOS UNIDOS",
              "STAN EDGAR REGRESA COMO DIRECTOR EJECUTIVO INTERINO DE VOUGHT INTERNATIONAL",
              "SE CONFIRMA LA MUERTE DE HOMELANDER TRAS ENFRENTAMIENTO FINAL TRANSMITIDO EN VIVO",
            ].map((title, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                border border-zinc-800
                rounded-2xl
                p-7
                bg-black/70
                backdrop-blur-md
                hover:border-blue-500
                transition-all duration-500
                hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]
                "
              >

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
                  Lo ultimo de VNN
                </p>

                <h3 className="text-xl font-black text-blue-400 uppercase">
                  {title}
                </h3>

                <p className="text-zinc-400 mt-4 leading-relaxed">
                  Comunicado oficial emitido por Vought International en relación con los recientes acontecimientos en materia de seguridad nacional.
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center border-t border-zinc-900 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black"></div>

        <p className="absolute text-[260px] font-black opacity-[0.02] inset-0 flex items-center justify-center">
          VOUGHT
        </p>

        <div className="relative z-10">

          <img
            src="/logos/vought-white.png"
            alt="Vought"
            className="w-[220px] mx-auto mb-8 opacity-80"
          />

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
            Confiados por Estados Unidos
          </p>

          <h2 className="text-5xl md:text-6xl font-black max-w-5xl mx-auto leading-tight">
            EL FUTURO DE LA HUMANIDAD
            <span className="block text-blue-500">
              ESTA SEGURO CON VOUGHT
            </span>
          </h2>

        </div>

      </section>

    </div>
  );
}