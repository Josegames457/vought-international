import { motion } from "framer-motion";

const products = [

  // COMICS & MAGAZINES

  {
    name: "V-PLE",
    image: "/products/vple.jpg",
    category: "MAGAZINE",
    status: "TOP SELLER",
    description:
      "A weekly celebrity magazine focused on Supes, entertainment scandals and exclusive Vought coverage.",
  },

  {
    name: "VOUGHT COMICS",
    image: "/products/voughtcomics.jpg",
    category: "COMICS",
    status: "BEST RATED",
    description:
      "Official publisher of superhero comics based on The Seven and other Vought heroes.",
  },

  {
    name: "VOUGHT SPORTS",
    image: "/products/voughtsports.jpg",
    category: "SPORTS",
    status: "LIMITED EDITION",
    description:
      "Sports magazine famous for the annual Super Swimsuit Spectacular issue.",
  },

  // MOVIES & TV

  {
    name: "VOUGHT ENTERTAINMENT TELEVISION",
    image: "/products/vet.jpg",
    category: "TV CHANNEL",
    status: "LIVE",
    description:
      "Fashion, celebrity and entertainment news network dedicated to modern hero culture.",
  },

  {
    name: "VOUGHT KIDS",
    image: "/products/voughtkids.jpg",
    category: "KIDS CHANNEL",
    status: "SAFE FOR KIDS",
    description:
      "Educational preschool entertainment featuring Vought mascots and young Supes.",
  },

  {
    name: "VOUGHT NEWS NETWORK",
    image: "/products/vnn.jpg",
    category: "NEWS",
    status: "24/7 LIVE",
    description:
      "Official Vought news network covering hero activity, national security and global events.",
  },

  {
    name: "VOUGHT STUDIOS",
    image: "/products/voughtstudios.jpg",
    category: "MOVIE STUDIO",
    status: "BLOCKBUSTER",
    description:
      "Film studio behind Dawn of the Seven, Invisible Force and other superhero productions.",
  },


  {
    name: "VOUGHT+",
    image: "/products/voughtplus.jpg",
    category: "STREAMING",
    status: "MOST POPULAR",
    description:
      "Premium streaming platform with superhero movies, series and exclusive Vought content.",
  },

  {
    name: "VOUGHTOONS",
    image: "/products/voughtoons.jpg",
    category: "CARTOONS",
    status: "FAMILY FAVORITE",
    description:
      "Animated cartoon universe starring iconic heroes and Vought characters.",
  },

  {
    name: "VSPN",
    image: "/products/vspn.jpg",
    category: "SPORTS CHANNEL",
    status: "LIVE SPORTS",
    description:
      "24-hour sports network covering hero competitions and national sporting events.",
  },

  {
    name: "VTV: TELEVISION FOR WOMEN",
    image: "/products/vtv.jpg",
    category: "TV CHANNEL",
    status: "TRENDING",
    description:
      "Lifestyle and drama programming targeted toward female audiences.",
  },


  // MUSIC


  {
    name: "VOUGHT MUSIC GROUP",
    image: "/products/vmg.jpg",
    category: "MUSIC COMPANY",
    status: "PLATINUM",
    description:
      "Entertainment label behind multiple Vought music productions and viral hits.",
  },


  {
    name: "VOUGHTIFY",
    image: "/products/voughtify.jpg",
    category: "STREAMING MUSIC",
    status: "MOST STREAMED",
    description:
      "Music streaming service featuring official hero soundtracks and exclusive releases.",
  },

  // GAMING

  {
    name: "THE MIDDLE PASSAGE",
    image: "/products/middlepassage.jpg",
    category: "VIDEO GAME",
    status: "UNRELEASED",
    description:
      "Upcoming narrative game featuring A-Train in a historical action storyline.",
  },

  {
    name: "TOURNAMENT OF HEROES",
    image: "/products/tournament.jpg",
    category: "FIGHTING GAME",
    status: "MULTIPLAYER",
    description:
      "Competitive fighting game starring members of The Seven and Payback.",
  },


  // TOYS

  {
    name: "A-TRAIN COMIC CON 2016 LIMITED EDITION",
    image: "/products/atraintoy.jpg",
    category: "COLLECTIBLE",
    status: "LIMITED",
    description:
      "Rare Comic Con exclusive A-Train collectible figure released in 2016.",
  },

  {
    name: "EZEKIEL TOY",
    image: "/products/ezekieltoy.jpg",
    category: "TOY",
    status: "FAITH APPROVED",
    description:
      "Official Ezekiel action figure distributed through Samaritan's Embrace.",
  },

  {
    name: "JR. SEVEN KUDDLE BUDDIEZ",
    image: "/products/kuddlebuddiez.jpg",
    category: "PLUSHIES",
    status: "KIDS FAVORITE",
    description:
      "Soft plush toy collection inspired by members of The Seven.",
  },

  {
    name: "THE SEVEN ACTION FIGURES",
    image: "/products/actionfigures.jpg",
    category: "ACTION FIGURES",
    status: "COLLECTOR SERIES",
    description:
      "Premium action figure line featuring every member of The Seven.",
  },

  // BOOKS

  {
    name: "DEEPER",
    image: "/products/deeper.jpg",
    category: "BOOK",
    status: "BEST SELLER",
    description:
      "Autobiography of The Deep and Cassandra Schwartz detailing their experiences.",
  },

  {
    name: "VOUGHT COLORING BOOK OF HEROES",
    image: "/products/coloringbook.jpg",
    category: "CHILDREN BOOK",
    status: "FOR KIDS",
    description:
      "Official Vought coloring book collection designed for young hero fans.",
  },

  {
    name: "VOUGHT'S AMERICAN HISTORY",
    image: "/products/historybook.jpg",
    category: "HISTORY",
    status: "EDUCATIONAL",
    description:
      "Historical publication series documenting America through the lens of Vought heroes.",
  },

];

export default function Products() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <section className="relative py-32 px-6 border-b border-zinc-900 overflow-hidden">

        <div className="absolute inset-0 bg-blue-500/5 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <img
            src="/logos/vought-white.png"
            alt="Vought"
            className="w-28 mx-auto mb-8 opacity-80"
          />

          <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
            Vought Consumer Division
          </p>

          <h1 className="text-6xl md:text-8xl font-black">
            PRODUCTS
          </h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-8 text-lg">
            Official products, entertainment and services distributed under
            Vought International.
          </p>

        </div>

      </section>

      {/* PRODUCTS GRID */}
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