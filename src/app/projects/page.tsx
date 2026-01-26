import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Section>
        <h1 className="text-5xl font-bold">Mis Proyectos</h1>
      </Section>

      <Section>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <div className="break-inside-avoid bg-gray-200 h-64 rounded-xl"></div>
          <div className="break-inside-avoid bg-gray-300 h-96 rounded-xl"></div>
          <div className="break-inside-avoid bg-gray-200 h-48 rounded-xl"></div>
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold">Contacto</h2>
      </Section>
    </main>
  );
}
