import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Header } from '@/components/header'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <>
      <Header />
      <Chat id={id} />
    </>
  )
}
