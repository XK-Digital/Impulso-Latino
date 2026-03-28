src/App.tsx          <div className="grid md:grid-cols-3 gap-6">
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
