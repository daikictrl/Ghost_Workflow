import { EditorLayout } from "@/components/editor/editor-layout"
import { getProjectsForUser } from "@/lib/project-data"

export default async function ProtectedEditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialProjects = await getProjectsForUser()

  return (
    <EditorLayout initialProjects={initialProjects}>
      {children}
    </EditorLayout>
  )
}
