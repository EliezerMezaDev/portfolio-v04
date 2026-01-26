import Section from "@/components/ui/Section";
import Link from "next/link";

export default function Home() {
  return (
    // El main es el contenedor del Scroll Snap
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      {/* 1. Welcome Section */}
      <Section className="bg-neutral-100 dark:bg-neutral-900">
        <h1 className="text-6xl font-bold mb-4">Hola, soy [Tu Nombre]</h1>
        <p className="text-xl text-neutral-600">Frontend Developer & UI Enthusiast</p>
      </Section>

      {/* 2. Proyectos Principales (Preview) */}
      <Section>
        <h2 className="text-4xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-64 bg-gray-200 rounded-lg">Proyecto A</div>
            <div className="h-64 bg-gray-200 rounded-lg">Proyecto B</div>
        </div>
        <Link href="/projects" className="mt-8 underline">Ver todos</Link>
      </Section>

      {/* 3. Experiencia */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
        <h2 className="text-4xl font-bold">Experiencia Reciente</h2>
        {/* Lista de experiencia */}
      </Section>

      {/* 4. Habilidades */}
      <Section>
        <h2 className="text-4xl font-bold">Stack Tecnológico</h2>
      </Section>

      {/* 5. Contacto (Común) */}
      <Section className="bg-black text-white">
        <h2 className="text-4xl font-bold">Trabajemos Juntos</h2>
        {/* Formulario */}
      </Section>

    </main>
  );
}