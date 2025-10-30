
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Newspaper, Lightbulb, LineChart, Sparkles, Cpu, Users, Library } from "lucide-react";

const categories = [
  { key: "emprendimiento", label: "Emprendimiento", icon: <Lightbulb className=\"h-5 w-5\" /> },
  { key: "finanzas", label: "Finanzas básicas", icon: <LineChart className=\"h-5 w-5\" /> },
  { key: "tecnologia", label: "Tecnología práctica", icon: <Cpu className=\"h-5 w-5\" /> },
  { key: "plantillas", label: "Plantillas & Guías", icon: <Library className=\"h-5 w-5\" /> },
];

const samplePosts = [
  {
    title: "Cómo empezar a cobrar con tarjeta desde el celular",
    tag: "Pagos & Fintech",
    excerpt: "Opciones, costos y pasos para habilitar cobros móviles en tu negocio.",
    slug: "cobrar-con-tarjeta-desde-el-celular",
    image: "/images/cobros-moviles.jpg",
    featured: true,
  },
  {
    title: "IA para principiantes: 7 tareas reales que puedes automatizar hoy",
    tag: "IA aplicada",
    excerpt: "Casos simples y útiles para estudiantes y emprendedores sin experiencia técnica.",
    slug: "ia-para-principiantes-7-tareas",
    image: "/images/ia-principiantes.jpg",
    featured: false,
  },
  {
    title: "Guía 101: Presupuesto de tu primer emprendimiento",
    tag: "Finanzas",
    excerpt: "Arma un presupuesto básico y evita errores comunes el primer año.",
    slug: "guia-presupuesto-primer-emprendimiento",
    image: "/images/presupuesto-101.jpg",
    featured: false,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-items-center font-semibold">CA</div>
            <span className="font-semibold tracking-tight">Negocios & Tecnología</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#mision" className="hover:text-gray-700">Misión</a>
            <a href="#categorias" className="hover:text-gray-700">Categorías</a>
            <a href="#articulos" className="hover:text-gray-700">Artículos</a>
            <a href="#sobre" className="hover:text-gray-700">Sobre</a>
          </nav>
          <div className="hidden md:block">
            <Button className="rounded-2xl">Suscríbete</Button>
          </div>
        </div>
      </header>

      {/* Hero / Misión */}
      <section id="mision" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="secondary" className="mb-4 w-fit gap-2">
                <Sparkles className="h-4 w-4" /> Aprender. Emprender. Innovar.
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Educación clara y práctica en <span className="underline decoration-gray-300">negocios</span> y <span className="underline decoration-gray-300">tecnología</span> para quienes quieren avanzar.
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-prose">
                Nuestra misión: <span className="font-medium">“acercar el conocimiento en negocios y tecnología a cada estudiante y emprendedor de Centroamérica, convirtiendo ideas en acción y aprendizaje en progreso.”</span>
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="rounded-2xl">Explorar artículos</Button>
                <Button variant="outline" className="rounded-2xl">Ver categorías</Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2"><Newspaper className="h-4 w-4" /> Publicaciones semanales</div>
                <div className="flex items-center gap-2"><Users className="h-4 w-4" /> Para estudiantes y emprendedores</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="relative aspect-[4/3] w-full rounded-3xl border bg-gradient-to-br from-gray-100 to-gray-50 grid place-items-center shadow-sm">
                <div className="text-center p-8">
                  <p className="text-sm text-gray-500">Mockup ilustrativo</p>
                  <h3 className="mt-2 text-xl font-semibold">“Negocios & Tecnología 101”</h3>
                  <p className="mt-2 text-gray-600">Guías paso a paso, plantillas descargables y comparativas simples.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Explora por categoría</h2>
          <Button variant="ghost" className="rounded-2xl">Ver todo <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Card key={c.key} className="rounded-2xl border-gray-200 hover:shadow-sm transition">
              <CardHeader className="flex-row items-center gap-2">
                {c.icon}
                <CardTitle className="text-base">{c.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Artículos intro, listas útiles y guías prácticas. Ideales para empezar.
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top article of the week (dynamic) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {(() => {
          const featured = samplePosts.find(p => p.featured) || samplePosts[0] || { title: "", excerpt: "", tag: "", slug: "", image: "" };
          return (
            <div className="rounded-3xl border bg-white p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">Artículo destacado de la semana</h3>
                <p className="mt-2 text-gray-900 font-medium">{featured.title}</p>
                <p className="mt-1 text-sm text-gray-500">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Badge variant="outline" className="w-fit">{featured.tag}</Badge>
                  <Button className="rounded-2xl">
                    <a href={`/articulos/${featured.slug}`}>Leer más</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border bg-gray-50 aspect-[4/3] overflow-hidden grid place-items-center">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-gray-500 text-sm">Imagen del artículo</span>
                )}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Artículos recientes */}
      <section id="articulos" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Artículos recientes</h2>
            <Button variant="ghost" className="rounded-2xl">Ver más <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {samplePosts.map((p, i) => (
              <Card key={i} className="rounded-2xl hover:shadow-sm transition">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-1">{p.tag}</Badge>
                  <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">{p.excerpt}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="sobre" className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Sobre nosotros</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Creamos contenido claro y aplicable para que cualquier persona pueda entender conceptos de negocio y tecnología, y convertirlos en decisiones reales. Nuestro enfoque es mobile‑first, con explicaciones visuales, checklists y comparativas simples.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• Publicaciones semanales y guías prácticas</li>
              <li>• Plantillas descargables (presupuestos, planes, checklists)</li>
              <li>• Historias locales y casos reales</li>
            </ul>
          </div>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Nuestra misión</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              “Acercar el conocimiento en negocios y tecnología a cada estudiante y emprendedor de Centroamérica, convirtiendo ideas en acción y aprendizaje en progreso.”
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border p-8 md:p-12 bg-gradient-to-br from-white to-gray-50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">¿Listo para aprender sin complicaciones?</h3>
          <p className="mt-3 text-gray-600">Explora artículos introductorios, descarga plantillas y da el siguiente paso en tu proyecto.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button className="rounded-2xl">Empezar ahora</Button>
            <Button variant="outline" className="rounded-2xl">Ver plantillas</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CA Negocios & Tecnología. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a className="hover:text-gray-700" href="#">Política de privacidad</a>
            <a className="hover:text-gray-700" href="#">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
