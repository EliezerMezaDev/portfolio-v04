import { getDictionary } from "@/lib/dictionary";

//? Sections
import Hero from "@/components/home/Hero";

export default async function Home() {
  const dict = await getDictionary("es");

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero dict={dict} />

      {/* <Section>
        <h2 className="text-4xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-64 bg-gray-200 rounded-lg">Proyecto A</div>
          <div className="h-64 bg-gray-200 rounded-lg">Proyecto B</div>
        </div>
        <Link href="/projects" className="mt-8 underline">
          Ver todos
        </Link>
      </Section>

      <Section className="bg-base-dark">
        <h2 className="text-4xl font-bold">Experiencia Reciente</h2>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold">Stack Tecnológico</h2>
      </Section>

      <Section className="bg-base-dark">
        <h2 className="text-4xl font-bold">Trabajemos Juntos</h2>
      </Section> */}
    </main>
  );
}
