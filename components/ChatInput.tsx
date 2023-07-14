'use client'

import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

type ChatInputProps = HTMLAttributes<HTMLDivElement>

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={cn('border-t border-zinc-100', className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          autoFocus
          placeholder="Write a messege ..."
          className="peer block w-full resize-none border-0 bg-zinc-100 py-1.5 pr-14 text-sm text-gray-900 focus:ring-0 disabled:opacity-50 sm:leading-6"
        />
      </div>
    </div>
  )
}

export default ChatInput
