import { motion } from "framer-motion";

const heroes = [
  {
    name: "HOMELANDER",
    image: "/heroes/homelander.jpg",
    status: "ACTIVE",
    threat: "EXTREME",
    ranking: "#1",
    approval: "98%",
    stability: "STABLE",
    clearance: "OMEGA",
    description:
      "Líder oficial de The Seven y principal símbolo de poder de Vought International. Considerado el Supe más poderoso del planeta.",
  },

  {
    name: "QUEEN MAEVE",
    image: "/heroes/maeve.jpg",
    status: "RETIRED",
    threat: "HIGH",
    ranking: "#2",
    approval: "91%",
    stability: "STABLE",
    clearance: "ALPHA",
    description:
      "Veterana de The Seven reconocida por su capacidad de combate, liderazgo táctico y experiencia en operaciones de alto riesgo.",
  },

  {
    name: "A-TRAIN",
    image: "/heroes/atrain.jpg",
    status: "ACTIVE",
    threat: "HIGH",
    ranking: "#5",
    approval: "84%",
    stability: "UNSTABLE",
    clearance: "BETA",
    description:
      "Velocista oficial de The Seven. Especializado en respuesta rápida y persecución de amenazas urbanas.",
  },

  {
    name: "THE DEEP",
    image: "/heroes/deep.jpg",
    status: "ACTIVE",
    threat: "MODERATE",
    ranking: "#7",
    approval: "73%",
    stability: "STABLE",
    clearance: "GAMMA",
    description:
      "Especialista en operaciones marítimas y protección oceánica. Representante oficial de Oceanland.",
  },

  {
    name: "BLACK NOIR",
    image: "/heroes/noir.jpg",
    status: "DECEASED",
    threat: "EXTREME",
    ranking: "#3",
    approval: "89%",
    stability: "CLASSIFIED",
    clearance: "OMEGA",
    description:
      "Operativo táctico de élite con historial clasificado. Reconocido por su eficiencia en misiones encubiertas.",
  },

  {
    name: "TRANSLUCENT",
    image: "/heroes/translucent.jpg",
    status: "DECEASED",
    threat: "HIGH",
    ranking: "#6",
    approval: "78%",
    stability: "STABLE",
    clearance: "BETA",
    description:
      "Miembro original de The Seven especializado en infiltración, espionaje y reconocimiento táctico.",
  },

  {
    name: "SISTER SAGE",
    image: "/heroes/sage.jpg",
    status: "ACTIVE",
    threat: "EXTREME",
    ranking: "#4",
    approval: "87%",
    stability: "STABLE",
    clearance: "OMEGA",
    description:
      "Considerada la mente más inteligente registrada por Vought International. Especialista estratégica.",
  },

  {
    name: "FIRECRACKER",
    image: "/heroes/firecracker.jpg",
    status: "ACTIVE",
    threat: "HIGH",
    ranking: "#8",
    approval: "82%",
    stability: "STABLE",
    clearance: "BETA",
    description:
      "Figura mediática de alto impacto con fuerte influencia pública y participación en campañas nacionales.",
  },

  {
    name: "SOLDIER BOY",
    image: "/heroes/soldierboy.jpg",
    status: "CLASSIFIED",
    threat: "OMEGA",
    ranking: "#0",
    approval: "95%",
    stability: "UNSTABLE",
    clearance: "OMEGA",
    description:
      "Activo histórico de Vought International. Catalogado como uno de los Supes más peligrosos jamás registrados.",
  },
];

export default function Heroes() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* HEADER */}
      <section className="relative py-32 px-6 border-b border-zinc-900 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px] rounded-full"></div>

        {/* WATERMARK */}
        <p className="absolute inset-0 flex items-center justify-center text-[250px] font-black opacity-[0.03]">
          HEROES
        </p>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <img
            src="/logos/vought-white.png"
            alt="Vought"
            className="w-[160px] mx-auto mb-8 opacity-80"
          />

          <p className="text-blue-400 uppercase tracking-[0.4em] text-sm mb-4">
            Vought International
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            THE SEVEN
          </h1>

          <p className="text-zinc-400 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Base de datos oficial de Supes activos y clasificados bajo supervisión
            directa de Vought International.
          </p>

        </div>

      </section>

      {/* HERO GRID */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {heroes.map((hero, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.01 }}
              className="
              group
              relative
              border border-zinc-800
              rounded-3xl
              overflow-hidden
              bg-zinc-950
              hover:border-blue-500
              transition-all duration-500
              hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]
              "
            >

              {/* BACKGROUND GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="grid md:grid-cols-2">

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={hero.image}
                    alt={hero.name}
                    className="
                    w-full
                    h-[700px]
                    object-cover
                    object-top
                    transition-transform duration-700
                    group-hover:scale-105
                    "
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                  {/* RANK */}
                  <div className="absolute top-5 left-5 backdrop-blur-md bg-black/50 border border-white/10 px-4 py-2 rounded-xl">
                    <p className="text-xs text-zinc-400 uppercase tracking-widest">
                      Ranking
                    </p>

                    <p className="text-blue-400 font-black text-xl">
                      {hero.ranking}
                    </p>
                  </div>

                </div>

                {/* INFO */}
                <div className="p-8 flex flex-col justify-between relative z-10">

                  <div>

                    <p className="text-blue-400 uppercase tracking-[0.3em] text-xs mb-3">
                      Vought Hero Dossier
                    </p>

                    <h2 className="text-4xl font-black leading-none">
                      {hero.name}
                    </h2>

                    <p className="text-zinc-400 mt-6 leading-relaxed">
                      {hero.description}
                    </p>

                    {/* STATS */}
                    <div className="mt-8 grid grid-cols-2 gap-4">

                      <div className="border border-zinc-800 rounded-2xl p-4 bg-black/40">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">
                          Status
                        </p>

                        <p className="mt-2 text-green-400 font-black">
                          {hero.status}
                        </p>
                      </div>

                      <div className="border border-zinc-800 rounded-2xl p-4 bg-black/40">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">
                          Threat Level
                        </p>

                        <p className="mt-2 text-red-400 font-black">
                          {hero.threat}
                        </p>
                      </div>

                      <div className="border border-zinc-800 rounded-2xl p-4 bg-black/40">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">
                          Public Approval
                        </p>

                        <p className="mt-2 text-blue-400 font-black">
                          {hero.approval}
                        </p>
                      </div>

                      <div className="border border-zinc-800 rounded-2xl p-4 bg-black/40">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest">
                          Clearance
                        </p>

                        <p className="mt-2 text-yellow-400 font-black">
                          {hero.clearance}
                        </p>
                      </div>

                    </div>

                    {/* STABILITY */}
                    <div className="mt-8">

                      <div className="flex justify-between mb-3">
                        <p className="text-xs uppercase tracking-widest text-zinc-500">
                          Compound V Stability
                        </p>

                        <p className="text-blue-400 text-sm font-bold">
                          {hero.stability}
                        </p>
                      </div>

                      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                      </div>

                    </div>

                  </div>

                  {/* FOOTER */}
                  <div className="mt-10 pt-6 border-t border-zinc-800 flex justify-between items-center">

                    <img
                      src="/logos/vought-logo.png"
                      alt="Vought"
                      className="w-10 opacity-40"
                    />

                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                      Authorized Personnel Only
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}