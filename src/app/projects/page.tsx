import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      {/* Header Projects */}
      <Section className="h-[50vh]"> {/* Quizás esta primera sección sea más corta */}
        <h1 className="text-5xl font-bold">Mis Proyectos</h1>
      </Section>

      {/* Masonry Grid Section */}
      {/* Nota: Un grid masonry puede ser muy alto, quizás esta sección deba tener 'min-h-screen' en lugar de 'h-screen' fijo, 
          o usar scroll interno. Por ahora lo dejamos estándar. */}
      <Section className="h-auto min-h-screen py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
           {/* Aquí irán los items del grid */}
           <div className="break-inside-avoid bg-gray-200 h-64 rounded-xl"></div>
           <div className="break-inside-avoid bg-gray-300 h-96 rounded-xl"></div>
           <div className="break-inside-avoid bg-gray-200 h-48 rounded-xl"></div>
        </div>
      </Section>

      {/* Contacto */}
      <Section className="bg-black text-white">
        <h2 className="text-4xl font-bold">Contacto</h2>
      </Section>

    </main>
  );
}