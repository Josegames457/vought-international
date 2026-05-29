import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_6adcdss",
        "template_7c7fphk",
        form.current,
        "rbfMlCxpkhFIU-dDZ"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          alert("Transmission Failed.");
        }
      );
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}

      <section className="relative py-32 px-6 border-b border-zinc-900">

        <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <img
            src="/logos/vought-white.png"
            alt="Vought"
            className="w-20 mx-auto mb-8 opacity-80"
          />

          <p className="uppercase tracking-[0.5em] text-blue-400 text-sm mb-4">
            Vought International
          </p>

          <h1 className="text-6xl md:text-8xl font-black">
            CONTACTO
          </h1>

          <p className="text-zinc-400 mt-8 max-w-3xl mx-auto text-lg">
            Comunicación corporativa, gestión de héroes y operaciones globales.
          </p>

        </div>

      </section>

      {/* INFO CARDS */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "SEDE",
              text: "Torre Vought, Ciudad de Nueva York",
            },
            {
              title: "GESTIÓN DE HÉROES",
              text: "Supervisión operativa de todos los supervisores en activo",
            },
            {
              title: "LÍNEA DIRECTA DE EMERGENCIA",
              text: "Red nacional de respuesta 24/7",
            },
            {
              title: "RELACIONES PÚBLICAS",
              text: "Medios y comunicación corporativa.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950 hover:border-blue-500/40 transition"
            >
              <h2 className="text-blue-400 font-black text-lg uppercase mb-4">
                {item.title}
              </h2>

              <p className="text-zinc-400">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CONTACT FORM */}

      <section className="pb-32 px-6">

        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950"
          >

            <div className="mb-10">

              <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-3">
                Transmisión segura
              </p>

              <h2 className="text-4xl font-black">
                CONTACTE A VOUGHT
              </h2>

            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div>
                <label className="block mb-2 text-zinc-400">
                  Nombre completo
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-zinc-400">
                Direccion de Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-zinc-400">
                  Departamento
                </label>

                <select
                  name="department"
                  required
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition"
                >
                  <option value="">Seleccione departmento</option>
                  <option>Gestion de heroes</option>
                  <option>Relaciones publicas</option>
                  <option>Operaciones de seguridad</option>
                  <option>Vought Studios</option>
                  <option>Relaciones con inversores</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-zinc-400">
                  Mensaje
                </label>

                <textarea
                  name="message"
                  rows="6"
                  required
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-400 transition text-white font-black py-4 rounded-xl text-lg"
              >
                {loading ? "TRANSMITTING..." : "ENVIAR COMUNICADO"}
              </button>

              {sent && (
                <div className="border border-green-500/30 bg-green-500/10 rounded-xl p-4 text-green-400 text-center font-bold">
                 COMUNICADO ENVIADO CON ÉXITO
                </div>
              )}

            </form>

          </motion.div>

        </div>

      </section>

    </div>
  );
}