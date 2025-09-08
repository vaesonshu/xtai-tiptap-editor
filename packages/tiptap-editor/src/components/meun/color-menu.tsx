'use client'

import { memo, useEffect, useState } from 'react'
import { Editor } from '@tiptap/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Brush, ChevronDown, Baseline } from 'lucide-react'
import { ColorPicker } from '@/components/Colorpicker'

const MemoColorPicker = memo(ColorPicker)

interface IProps {
  editor: Editor | null
}

export default function colorMenu(props: IProps) {
  const { editor } = props
  if (editor == null) return

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          <Baseline className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <ColorPanel editor={editor} />
      </PopoverContent>
    </Popover>
  )
}

function ColorPanel(props: IProps) {
  const [color, setColor] = useState('')
  const { editor } = props
  if (editor == null) return

  const commands = {
    onChangeColor: (color: string) => {
      if (color.includes('NaN')) return
      setColor(color)
      editor.chain().focus().setColor(color).run()
    },
    onClearColor: () => {
      setColor('')
      editor.chain().focus().unsetColor().run()
    },
  }

  return <MemoColorPicker color={color} onChange={commands.onChangeColor} onClear={commands.onClearColor} />
}
