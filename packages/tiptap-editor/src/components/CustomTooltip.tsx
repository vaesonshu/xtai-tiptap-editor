'use client'

import React, { ReactNode } from 'react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface CustomTooltipProps {
  /** 鼠标悬浮/触发的元素 */
  children: ReactNode
  /** Tooltip 显示的内容 */
  content: ReactNode
  /** 可选：Tooltip 方向，默认 top */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** 可选：Tooltip 偏移距离 */
  offset?: number
  /** 其他类名 */
  className?: string
}

/**
 * 可复用 Tooltip 组件
 */
export default function CustomTooltip({ children, content, side = 'top', offset = 4, className }: CustomTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} sideOffset={offset} className={className}>
        {content}
      </TooltipContent>
    </Tooltip>
  )
}
