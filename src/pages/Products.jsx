import { motion } from "framer-motion";

const products = [


  {
    name: "V-PLE",
    image: "/products/vple.jpg",
    category: "REVISTA",
    status: "MEJOR VENTA",
    description:
      "Una revista semanal de famosos centrada en superhéroes, escándalos del mundo del espectáculo y cobertura exclusiva de Vought.",
  },

  {
    name: "VOUGHT COMICS",
    image: "/products/voughtcomics.jpg",
    category: "COMICS",
    status: "MEJOR CLASIFICADOS",
    description:
      "Editorial oficial de cómics de superhéroes basados ​​en Los Siete y otros héroes de Vought.",
  },

  {
    name: "VOUGHT SPORTS",
    image: "/products/voughtsports.jpg",
    category: "SPORTS",
    status: "EDICION LIMITADA",
    description:
      "Revista deportiva famosa por su edición anual Super Swimsuit Spectacular" ,
  },


  {
    name: "VOUGHT ENTERTAINMENT TELEVISION",
    image: "/products/vet.jpg",
    category: "CANAL DE TELEVISIÓN",
    status: "EN VIVO",
    description:
      "Red de noticias sobre moda, famosos y entretenimiento dedicada a la cultura del héroe moderno.",
  },

  {
    name: "VOUGHT KIDS",
    image: "/products/voughtkids.jpg",
    category: "CANAL INFANTIL",
    status: "SEGURO PARA NIÑOS",
    description:
      "Entretenimiento educativo preescolar con las mascotas de Vought y jóvenes superhéroes.",
  },

  {
    name: "VOUGHT NEWS NETWORK",
    image: "/products/vnn.jpg",
    category: "NOTICIAS",
    status: "EN VIVO 24/7",
    description:
      "Red oficial de noticias de Vought que cubre la actividad de los héroes, la seguridad nacional y los acontecimientos mundiales.",
  },

  {
    name: "VOUGHT STUDIOS",
    image: "/products/voughtstudios.jpg",
    category: "ESTUDIO DE PELICULAS",
    status: "ÉXITO DE TAQUILLA",
    description:
      "Estudio cinematográfico responsable de películas como Dawn of the Seven, Invisible Force y otras producciones de superhéroes.",
  },


  {
    name: "VOUGHT+",
    image: "/products/voughtplus.jpg",
    category: "STREAMING",
    status: "MAS POPULAR",
    description:
      "Plataforma de streaming premium con películas y series de superhéroes, además de contenido exclusivo de Vought.",
  },

  {
    name: "VOUGHTOONS",
    image: "/products/voughtoons.jpg",
    category: "CARTOONS",
    status: "FAVORITOS DE FAMILIA",
    description:
      "Universo de dibujos animados protagonizado por héroes icónicos y personajes de Vought.",
  },

  {
    name: "VSPN",
    image: "/products/vspn.jpg",
    category: "CANAL DE DEPORTES",
    status: "DEPORTES EN VIVO",
    description:
      "Canal deportivo 24 horas que cubre competiciones de héroes y eventos deportivos nacionales.",
  },

  {
    name: "VTV: TELEVISION FOR WOMEN",
    image: "/products/vtv.jpg",
    category: "TCANAL DE TELEVISIÓN",
    status: "TENDENCIA",
    description:
      "Programación sobre estilo de vida y drama dirigida al público femenino.",
  },




  {
    name: "VOUGHT MUSIC GROUP",
    image: "/products/vmg.jpg",
    category: "COMPAÑIA DE MUSICA",
    status: "PLATINO",
    description:
      "Sello discográfico responsable de múltiples producciones musicales y éxitos virales de Vought.",
  },


  {
    name: "VOUGHTIFY",
    image: "/products/voughtify.jpg",
    category: "SERVICIO DE STREAMING DE MUSICA",
    status: "MAS TRANSMITIDO",
    description:
      "Servicio de música en streaming con bandas sonoras oficiales de los héroes y lanzamientos exclusivos.",
  },


  {
    name: "THE MIDDLE PASSAGE",
    image: "/products/middlepassage.jpg",
    category: "VIDEOJUEGO",
    status: "NO LANZADO",
    description:
      "Próximo juego narrativo protagonizado por A-Train en una historia de acción histórica.",
  },

  {
    name: "TOURNAMENT OF HEROES",
    image: "/products/tournament.jpg",
    category: "JUEGO DE PELEAS",
    status: "MULTIJUGADOR",
    description:
      "Juego de lucha competitivo protagonizado por miembros de The Seven y Payback.",
  },



  {
    name: "A-TRAIN COMIC CON 2016 LIMITED EDITION",
    image: "/products/atraintoy.jpg",
    category: "COLLECIONABLE",
    status: "LIMITADO",
    description:
      "Figura coleccionable exclusiva de A-Train, rara y lanzada en la Comic Con de 2016.",
  },

  {
    name: "EZEKIEL TOY",
    image: "/products/ezekieltoy.jpg",
    category: "JUGUETE",
    status: "FE APROBADA",
    description:
      "Figura de acción oficial de Ezequiel distribuida por Samaritan's Embrace.",
  },

  {
    name: "JR. SEVEN KUDDLE BUDDIEZ",
    image: "/products/kuddlebuddiez.jpg",
    category: "PELUCHES",
    status: "FAVORITO DE LOS NIÑOS",
    description:
      "Colección de peluches suaves inspirados en los miembros de Los Siete.",
  },

  {
    name: "THE SEVEN ACTION FIGURES",
    image: "/products/actionfigures.jpg",
    category: "FIGURAS DE ACCION",
    status: "SERIE DE COLECCIONISTA",
    description:
      "Línea de figuras de acción premium que incluye a todos los miembros de Los Siete.",
  },


  {
    name: "DEEPER",
    image: "/products/deeper.jpg",
    category: "LIBRO",
    status: "MAS VENDIDO",
    description:
      "Autobiografía de The Deep y Cassandra Schwartz donde detallan sus experiencias.",
  },

  {
    name: "VOUGHT COLORING BOOK OF HEROES",
    image: "/products/coloringbook.jpg",
    category: "LIBRO INFANTIL",
    status: "PARA NIÑOS",
    description:
      "Colección oficial de libros para colorear de Vought, diseñada para jóvenes fans de los superhéroes.",
  },

  {
    name: "VOUGHT'S AMERICAN HISTORY",
    image: "/products/historybook.jpg",
    category: "HISTORIA",
    status: "EDUCACIONAL",
    description:
      "Serie de publicaciones históricas que documentan Estados Unidos a través de la mirada de los héroes de Vought.",
  },

];

export default function Products() {
  return (
    <div className="bg-black text-white min-h-screen">

      <section className="relative py-32 px-6 border-b border-zinc-900 overflow-hidden">

        <div className="absolute inset-0 bg-blue-500/5 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <img
            src="/logos/vought-white.png"
            alt="Vought"
            className="w-28 mx-auto mb-8 opacity-80"
          />

          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
            División de Consumidores de Vought
          </p>

          <h1 className="text-6xl md:text-8xl font-black">
            PRODUCTOS
          </h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-8 text-lg">
           Productos, entretenimiento y servicios oficiales distribuidos por Vought International.
          </p>

        </div>

      </section>

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.01 }}
              className="
                border border-zinc-800
                rounded-3xl
                overflow-hidden
                bg-zinc-950
                hover:border-blue-500
                transition-all duration-500
              "
            >

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-[340px]
                  object-cover
                  transition-transform duration-700
                  hover:scale-105
                "
              />

              <div className="p-8">

                <div className="flex justify-between items-center mb-5">

                  <p className="text-blue-400 text-xs uppercase tracking-[0.3em]">
                    {product.category}
                  </p>

                  <span className="text-xs border border-blue-500/40 text-blue-400 px-3 py-1 rounded-full">
                    {product.status}
                  </span>

                </div>

                <h2 className="text-3xl font-black leading-tight">
                  {product.name}
                </h2>

                <p className="text-zinc-400 mt-5 leading-relaxed">
                  {product.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}