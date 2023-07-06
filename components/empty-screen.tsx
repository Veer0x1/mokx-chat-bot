import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

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
    <div className="mx-auto max-w-2xl">
      <div className="p-8">
        <div className={"flex justify-center align-middle"}>
          <div className="text-center">
            <h1 className="mb-2 text-lg font-semibold text-[#69235B]">
              Welcome to Mokx AI Chatbot!
            </h1>
            <p className="leading-normal text-[#69235B]">
              You can ask queries like:
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-center space-y-2">
          <div className={'text-center'}>
          {exampleMessages.map((message, index) => (
              <div key={index} className={''}>
              <Button
                  variant="secondary"
                  className="m-2 h-16 rounded-full bg-[#FBBC04] p-4 text-base font-light text-[#69235B] sm:h-4"
                  onClick={() => setInput(message.message)}
              >
                <span className={'p-4'}>{message.heading}</span>
              </Button>
              </div>

          ))}
          </div>

        </div>
        <div className={'mt-6 flex items-center justify-center text-center'}>
          <Icons.alert className={'mr-2 h-4 w-4 text-[#69235B]'} />
          <p className="leading-normal text-[#69235B]">
            Limitation: May struggle with complex queries.
          </p>
        </div>

      </div>
    </div>
  )
}
