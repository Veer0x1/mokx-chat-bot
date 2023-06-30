import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'What is the mantra in Rigveda 10.2.3?',
    message: `What is the mantra in Rigveda 10.2.3?`
  },
  {
    heading: 'What are the prescribed Vedic remedies for snake bites?',
    message: 'What are the prescribed Vedic remedies for snake bites?'
  },
  {
    heading: 'Can you tell me the significance of the Gayatri Mantra?',
    message: `Can you tell me the significance of the Gayatri Mantra?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Mokx AI Chatbot!
        </h1>

        <p className="leading-normal text-muted-foreground">
          You can ask queries like:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
