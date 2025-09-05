'use client'

import { TiptapEditor } from 'xtai-tiptap-editor'
import 'xtai-tiptap-editor/dist/style.css'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

export default function Page() {
  const [content, setContent] = useState('<p>Hello Turborepo!</p>')

  return (
    <div className="p-4">
      <TiptapEditor
        content={content}
        onChange={setContent}
        extensions={[StarterKit]}
        customToolbar={(editor) => (
          <button onClick={() => editor.chain().focus().insertContent('😎').run()}>Add Emoji</button>
        )}
      />
      <div className="mt-4 border p-2 bg-amber-200">
        <strong>Preview:</strong>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
