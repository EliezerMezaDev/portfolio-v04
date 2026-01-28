import {
  getDictionary,
  getExperienceData,
  getProjectsData,
} from "@/lib/dictionary";

//? Sections
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export default async function Home() {
  const LOCALE = "es";

  const dict = await getDictionary(LOCALE);
  const experienceData = await getExperienceData(LOCALE);
  const projectsData = await getProjectsData(LOCALE);

  console.log(experienceData);

  return (
    <main className="relative min-h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="absolute right-0 top-0 h-full w-full z-0 hidden md:block bg-hexagon-patter">
        <div className="absolute inset-0 bg-linear-to-r from-base-dark/95 from-25% to-base-dark/75" />
      </div>

      <Hero dict={dict} />

      <ProjectsPreview dict={dict} projects={projectsData} />

      <Experience dict={dict} data={experienceData} />
    </main>
  );
}
