import { getProjectBySlug } from "@lib/projects"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Not Found | EaMZ" }

  const firstParagraph = project.content.split("\n\n")[0] || project.content

  return {
    title: `${project.title} | EaMZ`,
    description: firstParagraph.slice(0, 160),
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}