import * as React from 'react'
import Link from 'next/link'
import Textarea from 'react-textarea-autosize'
import { UseChatHelpers } from 'ai/react'

import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { IconPlus, } from '@/components/ui/icons'
import { Icons }  from '@/components/icons'

export interface PromptProps
  extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => void
  isLoading: boolean
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        if (input === '') {
          return
        }
        setInput('')
        await onSubmit(input)
      }}
      ref={formRef}
    >
      <div className="relative flex w-full grow flex-col overflow-hidden bg-background px-8 shadow-lg rounded-full sm:px-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: 'sm', variant: 'outline' }),
                'absolute left-5 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4'
              )}
              target="_blank"
            >
              <IconPlus className={"text-[#69235B]"} />
              <span className="sr-only">New Chat</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Send a message."
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          spellCheck={false}
          className="min-h-[60px] w-full ml-8 sm:ml-auto resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-5 top-4 sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || input === ''}
                className={'bg-[#69235B]'}
              >
                <Icons.send className={'h-4 w-4'} />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
