import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { HiChat } from 'react-icons/hi'
import { HiUsers } from 'react-icons/hi2'

import useConversation from './useConversation'

const useRoutes = () => {
  const pathName = usePathname()
  const { conversationId } = useConversation()

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        href: '/',
        name: 'Home',
        icon: HiChat,
        active: pathName === '/' || !!conversationId,
      },
      {
        label: 'Conversation',
        href: `/conversation`,
        name: 'Conversation',
        icon: HiUsers,
        active: pathName === '/conversation' || !!conversationId,
      },
    ],
    [pathName, conversationId],
  )

  return routes
}

export default useRoutes
