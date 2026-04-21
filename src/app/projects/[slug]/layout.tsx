import jsonData from "@data/projects.json";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = jsonData.Projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Not Found | EaMZ" };
  }

  return {
    title: `${project.title} | EaMZ`,
    description: project.desc[0]?.slice(0, 160),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
