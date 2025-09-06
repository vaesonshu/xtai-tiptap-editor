'use client'

import { useEditor, EditorContent, type EditorOptions, type Extensions } from '@tiptap/react'
import { useEffect, ReactNode } from 'react'
import { Toolbar } from './Toolbar'
import { tipTapExtensions } from '@/extensions'
import StarterKit from '@tiptap/starter-kit'

import './editor.css'

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
  extensions = [],
  editorOptions = {},
  customToolbar,
}: TiptapEditorProps) {
  console.log('editor', [...extensions, ...tipTapExtensions])

  const editor = useEditor({
    extensions: [...extensions, ...tipTapExtensions],
    content,
    editable,
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    ...editorOptions,
    immediatelyRender: false,
  })

  useEffect(() => () => editor?.destroy(), [editor])

  return (
    <div className="border">
      <Toolbar editor={editor} customToolbar={customToolbar} />
      <div className="p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
