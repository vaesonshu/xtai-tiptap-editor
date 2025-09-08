'use client'

import React, { useState, memo } from 'react'
import { Editor } from '@tiptap/react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import CustomTooltip from '@/components/CustomTooltip'
import { Smile } from 'lucide-react'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

// 使用 React.memo 避免重复渲染
const MemoizedEmojiPicker = memo(({ onSelect }: { onSelect: (emoji: any) => void }) => (
  <div className="w-full">
    <Picker
      data={data}
      onEmojiSelect={onSelect}
      emojiSize={20} // 小一点，减少渲染压力
      perLine={8} // 每行显示数量
      previewPosition="none" // 不显示顶部预览
      searchPosition="none" // 不显示搜索框
      locale="zh" // 中文
      categories={['frequent', 'people', 'nature', 'foods', 'activity', 'places', 'objects', 'symbols']}
    />
  </div>
))

MemoizedEmojiPicker.displayName = 'MemoizedEmojiPicker'

interface EmojiPopoverProps {
  editor: Editor
}

export default function EmojiMenu({ editor }: EmojiPopoverProps) {
  const onSelect = (emoji: any) => {
    console.log('emoji:', emoji)
    if (!editor) return
    // editor.chain().focus().setEmoji(emoji.id).run()
    editor.chain().focus().insertContent(emoji.native).run()
  }

  return (
    <Popover>
      <CustomTooltip content="表情" className="w-full">
        <PopoverTrigger asChild>
          <Button size="sm" variant="ghost">
            <Smile className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
      </CustomTooltip>
      <PopoverContent className="w-auto p-0" forceMount>
        <MemoizedEmojiPicker onSelect={onSelect} />
      </PopoverContent>
    </Popover>
  )
}
