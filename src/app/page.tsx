import {
  getDictionary,
  getExperienceData,
  getProjectsData,
} from "@/lib/dictionary";

//? Sections
import Hero from "@/components/home/Hero";
import Experience from "@/components/home/Experience";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Contact from "@/components/layout/Contact";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default async function Home() {
  const LOCALE = "es";

  const dict = await getDictionary(LOCALE);
  const experienceData = await getExperienceData(LOCALE);
  const projectsData = await getProjectsData(LOCALE);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-linear-to-br from-base-darken from-40% xl:from-15% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-base-darken from-25% xl:from-15% to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10">
        <Hero dict={dict} />

        <ProjectsPreview dict={dict} projects={projectsData} />

        <Experience dict={dict} data={experienceData} />

        <Contact dict={dict} />
      </div>
    </main>
  );
}

/*

export default async function Home() {
  const dict = await getDictionary(LOCALE);
  
  const experienceData = await getExperienceData(LOCALE);
  const projectsData = await getProjectsData(LOCALE);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-linear-to-br from-base-darken/95 form-15% to-base-darken/15 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-base-darken/95 form-15% to-base-darken/15 pointer-events-none" />
      </div>

      <div className="relative z-10">
        <Hero dict={dict} />
        <ProjectsPreview dict={dict} projects={projectsData} />
        <ExperienceItem dict={dict} data={experienceData} />
        <Contact dict={dict} />
      </div>
    </main>
  );
}


*/
