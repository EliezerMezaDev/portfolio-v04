import Section from "@/components/ui/Section";

export default function About() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Section>
        <h1 className="text-5xl font-bold">Sobre Mí</h1>
        <p className="mt-4 text-lg">Más allá del código.</p>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold">Formación Académica</h2>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold">Contacto</h2>
      </Section>
    </main>
  );
}
