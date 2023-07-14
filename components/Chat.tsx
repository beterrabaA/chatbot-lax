'use client'

import { useState } from 'react'
import Box from './Box'
import { ChatInput, ChatMessages } from '@/components'

const Chat = () => {
  const [message, setMessage] = useState('' as string)
  const [msgLisg, setMsgList] = useState([] as string[])

  const handleMessage = (textMsg: string) => {
    setMsgList([...msgLisg, textMsg])
    setMessage('')
  }
  return (
    <div className="flex h-80 flex-col">
      {/* <ChatMessages className="flex-1 px-2 py-3" /> */}
      <ChatInput className="px-4" />
    </div>
  )
}

export default Chat
