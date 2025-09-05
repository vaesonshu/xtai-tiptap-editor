'use client'

import { useEditor, EditorContent, type EditorOptions, type Extensions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, ReactNode } from 'react'
import { Toolbar } from './Toolbar'

export interface TiptapEditorProps {
  content?: string
  onChange?: (html: string) => void
  editable?: boolean
  extensions?: Extensions
  editorOptions?: Partial<EditorOptions>
  customToolbar?: (editor: any) => ReactNode
}

export function TiptapEditor({
  content = '',
  onChange,
  editable = true,
  extensions = [StarterKit],
  editorOptions = {},
  customToolbar,
}: TiptapEditorProps) {
  const editor = useEditor({
    extensions,
    content,
    editable,
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    ...editorOptions,
    immediatelyRender: false
  })

  useEffect(() => () => editor?.destroy(), [editor])

  return (
    <div className="border rounded-lg">
      <Toolbar editor={editor} customToolbar={customToolbar} />
      <div className="p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
