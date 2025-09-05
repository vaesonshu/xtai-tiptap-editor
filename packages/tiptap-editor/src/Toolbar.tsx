'use client'

import { Editor } from '@tiptap/react'
import { ReactNode } from 'react'

interface ToolbarProps {
  editor: Editor | null
  customToolbar?: (editor: Editor) => ReactNode
}

export function Toolbar({ editor, customToolbar }: ToolbarProps) {
  if (!editor) return null

  return (
    <div className="flex space-x-2 border-b p-2 bg-amber-200">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'font-bold text-blue-600' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'italic text-blue-600' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'line-through text-blue-600' : ''}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'bg-gray-200 px-1 rounded' : ''}
      >
        Code
      </button>
      {customToolbar && <div className="ml-4">{customToolbar(editor)}</div>}
    </div>
  )
}
