import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappNumber = "1234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20hacer%20crecer%20mi%20negocio.`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            Impulso<span className="text-yellow-400">Latino</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-400 font-semibold mb-4">
            Agencia de Marketing Digital para Latinos en USA
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Consigue más clientes para tu negocio sin depender del boca a boca
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl mb-8">
            Ayudamos a dueños de negocios latinos en Estados Unidos a crecer con
            estrategias de marketing digital que sí funcionan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="border border-white/20 px-6 py-3 rounded-full font-bold text-white"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Te suena familiar?
          </h2>
          <p className="text-zinc-300 mb-12">
            Sabemos lo frustrante que es trabajar duro y no ver el crecimiento
            que mereces.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Inestabilidad
              </h3>
              <p className="text-zinc-300">
                No tienes clientes constantes y tus ingresos cambian cada mes.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Dependencia
              </h3>
              <p className="text-zinc-300">
                Dependes demasiado de recomendaciones para conseguir trabajo.
              </p>
            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Publicas pero no vendes
              </h3>
              <p className="text-zinc-300">
                Estás en redes sociales, pero nadie te escribe ni te compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Cómo te ayudamos?
          </h2>
          <p className="text-zinc-300 mb-12">
            Servicios pensados para negocios locales y de servicios.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Manejo de Redes Sociales
              </h3>
              <p className="text-zinc-300">
                Publicamos contenido que atrae clientes reales.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Diseño de Páginas Web
              </h3>
              <p className="text-zinc-300">
                Creamos páginas web profesionales que venden por ti.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Publicidad en Meta Ads
              </h3>
              <p className="text-zinc-300">
                Lanzamos campañas para atraer prospectos listos para comprar.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                Branding
              </h3>
              <p className="text-zinc-300">
                Hacemos que tu negocio se vea profesional y confiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Casos de éxito
          </h2>
          <p className="text-zinc-300 mb-12">
            Negocios latinos que ya están viendo resultados reales.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-white/10 rounded-2xl p-6">
              <p className="text-zinc-300">
                “Ahora recibo mensajes todas las semanas gracias a los anuncios.”
              </p>
            </div>
            <div className="bg-black border border-white/10 rounded-2xl p-6">
              <p className="text-zinc-300">
                “Mi negocio ahora se ve profesional y cierro mejores clientes.”
              </p>
            </div>
            <div className="bg-black border border-white/10 rounded-2xl p-6">
              <p className="text-zinc-300">
                “Pasé de días vacíos a tener agenda llena.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
            Preguntas frecuentes
          </h2>

          {[
            {
              q: "¿Cuánto cuesta el servicio?",
              a: "Depende de tus necesidades. Podemos darte una propuesta según tu negocio.",
            },
            {
              q: "¿En cuánto tiempo veo resultados?",
              a: "Con campañas pagadas, puedes empezar a recibir prospectos en 1 a 2 semanas.",
            },
            {
              q: "¿Trabajan con mi tipo de negocio?",
              a: "Sí, especialmente con negocios locales y de servicios.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="mb-4 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-400 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-300">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-yellow-400 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Si tu negocio no está creciendo, alguien más se está llevando a tus
            clientes
          </h2>
          <p className="text-lg mb-8">
            No dejes pasar más tiempo. Empezá a crecer hoy.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold"
          >
            <MessageCircle className="w-5 h-5 text-yellow-400" />
            Hablar ahora por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
