// import getConversationById from '@/app/actions/getConversationById'
// import getMessages from '@/app/actions/getMessages'

// import Header from './components/Header'
// import Body from './components/Body'
// import Form from './components/Form'
import { EmptyState, Form } from '@/components'

interface IParams {
  conversationId: string
}

const ChatId = async ({ params }: { params: IParams }) => {
  //   const conversation = await getConversationById(params.conversationId)
  //   const messages = await getMessages(params.conversationId)
  const conversation = true
  if (!conversation) {
    return (
      <div className="h-full lg:pl-80">
        <div className="flex h-full flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full lg:pl-80">
      <div className="flex h-full flex-col">
        {/* <Header conversation={conversation} /> */}
        {/* <Body initialMessages={messages} /> */}
        <Form />
      </div>
    </div>
  )
}

export default ChatId
