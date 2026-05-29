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

        <button className="bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-xl font-bold text-sm">
          Vought+
        </button>

      </div>
    </nav>
  );
}