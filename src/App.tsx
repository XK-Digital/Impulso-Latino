/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  MessageCircle, 
  Phone, 
  Star, 
  TrendingUp, 
  Users, 
  Globe, 
  Megaphone, 
  Palette,
  Target,
  BarChart3,
  Search
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20hacer%20crecer%20mi%20negocio.`;

  return (
    <div className="min-h-screen bg-ink-900 text-white selection:bg-gold-500 selection:text-ink-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-ink-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
                <TrendingUp className="text-ink-900 w-5 h-5 font-bold" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Impulso<span className="text-gold-500">Latino</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors">Servicios</a>
              <a href="#proceso" className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors">Proceso</a>
              <a href="#testimonios" className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors">Testimonios</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-400 text-ink-900 px-5 py-2.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-ink-800),_transparent_50%)]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold-500 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Agencia de Marketing Digital para Latinos en USA
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            >
              Consigue más clientes para tu negocio sin depender del <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">boca a boca</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Ayudamos a dueños de negocios latinos en Estados Unidos a crecer, tener estabilidad y aumentar sus ingresos con estrategias de marketing digital que sí funcionan.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-400 text-ink-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contacto"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Solicitar asesoría gratuita
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINT SECTION */}
      <section className="py-24 bg-ink-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">¿Te suena familiar alguna de estas situaciones?</h2>
            <p className="text-gray-400 text-lg">Sabemos lo frustrante que es trabajar duro en tu negocio y no ver el crecimiento que mereces.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
                title: "Inestabilidad",
                desc: "No tienes clientes constantes y tus ingresos suben y bajan cada mes."
              },
              {
                icon: <Users className="w-8 h-8 text-gold-500" />,
                title: "Dependencia",
                desc: "Dependes casi al 100% de las recomendaciones de amigos para tener trabajo."
              },
              {
                icon: <Search className="w-8 h-8 text-gold-500" />,
                title: "Esfuerzo sin premio",
                desc: "Publicas fotos en redes sociales, pero nadie te compra ni te llama."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ink-900 p-8 rounded-2xl border border-white/5"
              >
                <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">"{item.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                Es hora de tomar el control de tu <span className="text-gold-500">crecimiento</span>.
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Nosotros somos la agencia de marketing digital para latinos en USA que entiende tu negocio y habla tu idioma.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Atraemos clientes de forma constante a tu negocio.",
                  "Construimos una imagen profesional que da confianza.",
                  "Generamos prospectos listos para comprar tus servicios."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 font-bold text-lg hover:text-gold-400 transition-colors group"
              >
                Descubre cómo lo hacemos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop" 
                  alt="Latino business owner smiling" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-ink-800 border border-white/10 p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Nuevos Clientes</p>
                    <p className="text-2xl font-bold text-white">+300%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="servicios" className="py-24 bg-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">¿Cómo te ayudamos a conseguir clientes en USA?</h2>
            <p className="text-gray-400 text-lg">Servicios diseñados específicamente para negocios locales y de servicios.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Megaphone className="w-8 h-8 text-gold-500" />,
                title: "Manejo de Redes Sociales",
                desc: "Publicamos contenido que atrae clientes reales, no solo likes y seguidores vacíos. Hacemos que tu negocio esté activo y visible."
              },
              {
                icon: <Globe className="w-8 h-8 text-gold-500" />,
                title: "Diseño de Páginas Web",
                desc: "Creamos páginas web profesionales que trabajan y venden por ti 24/7. Optimizadas para que te encuentren en Google."
              },
              {
                icon: <Target className="w-8 h-8 text-gold-500" />,
                title: "Publicidad en Facebook e Instagram",
                desc: "Lanzamos publicidad en Facebook para negocios (Meta Ads) que trae clientes listos para comprar o contratar tus servicios hoy mismo."
              },
              {
                icon: <Palette className="w-8 h-8 text-gold-500" />,
                title: "Branding y Posicionamiento",
                desc: "Haz que tu negocio se vea profesional, confiable y destaque de la competencia. Una buena imagen te permite cobrar lo que realmente vales."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ink-900 p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors group"
              >
                <div className="w-16 h-16 bg-ink-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-ink-900 px-8 py-4 rounded-full font-bold text-lg transition-all gap-2"
            >
              Quiero estos servicios para mi negocio
            </a>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section id="proceso" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Nuestro proceso para hacer crecer tu negocio</h2>
            <p className="text-gray-400 text-lg">Un sistema claro, sin tecnicismos y enfocado en resultados.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            
            {[
              {
                step: "01",
                title: "Analizamos tu negocio",
                desc: "Entendemos qué ofreces, quién es tu cliente ideal y qué necesitas para crecer."
              },
              {
                step: "02",
                title: "Creamos una estrategia",
                desc: "Diseñamos un plan a tu medida, sin complicaciones ni palabras raras."
              },
              {
                step: "03",
                title: "Ejecutamos campañas",
                desc: "Ponemos a trabajar los anuncios y las redes sociales para ti."
              },
              {
                step: "04",
                title: "Generamos clientes",
                desc: "Empiezas a recibir llamadas y mensajes de personas interesadas."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-ink-900 border-2 border-gold-500 rounded-full flex items-center justify-center text-2xl font-display font-bold text-gold-500 mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESULTS / BENEFITS SECTION */}
      <section className="py-24 bg-gold-500 text-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                Lo que logras al trabajar con nosotros
              </h2>
              <p className="text-xl text-ink-800/80 mb-10 font-medium">
                No vendemos "marketing", vendemos el crecimiento y la tranquilidad que tu negocio necesita.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Más clientes", desc: "Flujo constante todos los meses." },
                  { title: "Mayor visibilidad", desc: "Sé el #1 en tu ciudad." },
                  { title: "Marca profesional", desc: "Cobra lo que realmente vales." },
                  { title: "Crecimiento", desc: "Estabilidad para tu familia y futuro." }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-ink-900/80 font-medium">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-ink-900 text-white p-8 rounded-3xl shadow-2xl transform rotate-2">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Nuevos prospectos este mes</p>
                    <p className="text-4xl font-display font-bold text-gold-500">+124</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 bg-ink-800 p-4 rounded-xl">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <p className="font-medium">Nuevo mensaje de WhatsApp</p>
                        <p className="text-sm text-gray-400">"Hola, necesito una cotización..."</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
      <section id="testimonios" className="py-24 bg-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Casos de Éxito de Negocios Latinos</h2>
            <p className="text-gray-400 text-lg">Dueños de negocios como tú que ya están viendo resultados reales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos M.",
                business: "Compañía de Landscaping",
                quote: "Antes dependía de que mis amigos me recomendaran para tener trabajo. Ahora mi teléfono suena todas las semanas con clientes nuevos gracias a los anuncios en Facebook."
              },
              {
                name: "Roberto G.",
                business: "Contratista de Construcción",
                quote: "No entendía nada de marketing, pero ellos me explicaron todo fácil. Mi compañía ahora se ve súper profesional en internet y cerramos contratos mucho más grandes."
              },
              {
                name: "Maria S.",
                business: "Dueña de Salón de Belleza",
                quote: "Las campañas y el manejo de redes cambiaron mi salón. Antes tenía días vacíos, ahora siempre tengo la agenda llena con semanas de anticipación."
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ink-900 p-8 rounded-2xl border border-white/5 relative"
              >
                <div className="flex gap-1 text-gold-500 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-ink-800 rounded-full flex items-center justify-center font-bold text-xl text-gold-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gold-500">{testimonial.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Preguntas Frecuentes</h2>
            <p className="text-gray-400 text-lg">Resolvemos tus dudas de forma clara y directa.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Cuánto cuesta el servicio?",
                a: "Depende de tus necesidades exactas, pero ofrecemos planes muy accesibles diseñados especialmente para pequeños negocios latinos. Hablemos sin compromiso para darte un presupuesto exacto."
              },
              {
                q: "¿En cuánto tiempo veo resultados?",
                a: "Con la publicidad pagada (Meta Ads), puedes empezar a recibir llamadas y mensajes de prospectos en las primeras 1 a 2 semanas de lanzar la campaña."
              },
              {
                q: "¿Necesito experiencia previa en tecnología?",
                a: "¡Para nada! Nosotros nos encargamos de absolutamente todo lo técnico, el diseño y la configuración para que tú te enfoques en lo que mejor sabes hacer: atender a tus clientes."
              },
              {
                q: "¿Trabajan con mi tipo de negocio?",
                a: "Trabajamos especialmente con negocios locales y de servicios: construcción, landscaping, limpieza (cleaning services), restaurantes, salones de belleza, mecánicos, plomeros y más."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-ink-800 border border-white/5 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-ink-900 mb-6 leading-tight">
            Si tu negocio no está creciendo, alguien más se está llevando a tus clientes.
          </h2>
          <p className="text-xl text-ink-900/80 font-medium mb-12 max-w-2xl mx-auto">
            No dejes pasar más tiempo. Toma acción hoy y asegura el futuro de tu negocio en Estados Unidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink-900 hover:bg-ink-800 text-white px-8 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6 text-gold-500" />
              Hablar ahora por WhatsApp
            </a>
            <a 
              href="#contacto"
              className="bg-transparent border-2 border-ink-900 text-ink-900 hover:bg-ink-900/10 px-8 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Agendar asesoría gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
              <TrendingUp className="text-ink-900 w-5 h-5 font-bold" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Impulso<span className="text-gold-500">Latino</span></span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Impulso Latino. Agencia de Marketing Digital en USA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
