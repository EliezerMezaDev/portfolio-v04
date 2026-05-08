import { getProjectBySlug } from "@lib/projects"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./ProjectDetailClient"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return <ProjectDetailClient project={project} />
}