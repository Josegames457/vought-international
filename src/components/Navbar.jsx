import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-2xl font-black tracking-widest">
          VOUGHT
        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">
          <Link to="/series" className="hover:text-blue-400">Series y peliculas</Link>
          <Link to="/heroes" className="hover:text-blue-400">Heroes</Link>
          <Link to="/products" className="hover:text-blue-400">Productos</Link>
          <Link to="/news" className="hover:text-blue-400">Noticias</Link>
          <Link to="/contact" className="hover:text-blue-400">Contacto</Link>
        </div>

        <a
  href="https://www.primevideo.com/dp/0T7K3Y96XGTPML7HIMLFCES3Y7?ref_=dvm_pds_tit_co_sw_s_g_mkw_p416-kw566747-cr572563-c&mrntrk=go_cmp-20653375856_adg-184916443181_ad-781952257417_kwd-692258484609_dev-c_ext-&gclsrc=aw.ds&gad_source=1&gad_campaignid=20653375856&gbraid=0AAAAAqSJhJk2jN-MLe5VKiyJQ70N0-Ai-&gclid=CjwKCAjw8uTQBhAdEiwAVvtJyhsRPTVDcDJsQV3xQfdhakB4b3sRj_ahwBZqj_QdyY3pQPHobYMqERoCYcMQAvD_BwE"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-blue-600
    hover:bg-blue-500
    transition-all duration-300
    px-5 py-2 rounded-xl
    font-bold
  "
>
  VOUGHT+
</a>

      </div>
    </nav>
  );
}