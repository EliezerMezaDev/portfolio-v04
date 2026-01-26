import Section from "@/components/ui/Section";

export default function About() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      {/* Intro */}
      <Section>
        <h1 className="text-5xl font-bold">Sobre Mí</h1>
        <p className="mt-4 text-lg">Más allá del código.</p>
      </Section>

      {/* Formación */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
        <h2 className="text-4xl font-bold">Formación Académica</h2>
      </Section>

      {/* Contacto */}
      <Section className="bg-black text-white">
        <h2 className="text-4xl font-bold">Contacto</h2>
      </Section>

    </main>
  );
}