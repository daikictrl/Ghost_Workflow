import { EditorLayout } from "@/components/editor/editor-layout"

/**
 * Wraps its children inside the EditorLayout component.
 *
 * @returns A React element rendering `EditorLayout` containing the given `children`.
 */
export default function ProtectedEditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <EditorLayout>{children}</EditorLayout>
}
