import { Editor } from '@tiptap/react'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Code, Underline, CodeXml } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
interface IProps {
  editor: Editor | null
}

export default function BasicMenu(props: IProps) {
  const { editor } = props
  if (editor == null) return

  return (
    <>
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive('bold') ? 'secondary' : 'ghost'}
        tabIndex={-1}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Separator orientation="vertical" className="m-1 h-auto" />
      <Button
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        variant={editor.isActive('underline') ? 'secondary' : 'ghost'}
        tabIndex={-1}
      >
        <Underline className="h-4 w-4" />
      </Button>
    </>
  )
}
