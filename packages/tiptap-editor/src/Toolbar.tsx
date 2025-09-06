'use client'

import { Editor } from '@tiptap/react'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import BasicMenu from '@/components/meun/basic-menu'
import EmojiMenu from '@/components/meun/emoji-menu'
import { Separator } from '@/components/ui/separator'

interface ToolbarProps {
  editor: Editor | null
  customToolbar?: (editor: Editor) => ReactNode
}

export function Toolbar({ editor, customToolbar }: ToolbarProps) {
  if (!editor) return null

  return (
    <div className="flex space-x-2 border-b p-2 cursor-pointer bg-white shadow-sm">
      {/* 基本 */}
      <BasicMenu editor={editor} />
      <Separator orientation="vertical" className="m-1 h-auto" />
      {/* 表情 */}
      <EmojiMenu editor={editor} />
      {customToolbar && <div className="ml-4">{customToolbar(editor)}</div>}
    </div>
  )
}
