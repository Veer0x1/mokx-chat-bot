import { Message } from 'ai'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/ui/codeblock'
import { MemoizedReactMarkdown } from '@/components/markdown'
import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { ChatMessageActions } from '@/components/chat-message-actions'

export interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12')}
      {...props}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
          message.role === 'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground'
        )}
      >
        {message.role === 'user' ? (
          <IconUser />
        ) : (
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/3e90/170e/9815ef0380d9b0157bf2554c4acfafd3?Expires=1689552000&Signature=UuzReUnrPUCK1~Zra-YFTYNyffsZKvvyk25txZw3XsDHR0f930Zgtr1TbX51VlYpZHXCn2USPq1tL8YG8b60nDSWkMY2ULbfAeuBBpn2z63ZQzpLcFQeW1VO2PjXskobhRB1XtwXOgmYDELxXO~EWHRbH52-v57SvOW9Roo~SeJONQS3~HnLPm3~yYGymHQj58ENvff3o-xMsXRLkMWm5f2aMcGaBid-gzpLbNWSaickxDsX46Mu8Ol0J8KT4rZ9JLO4iuB7StTQ9Pmy5ysYOO86An6E14Z7TALLxke2CEAmheyA~la7BTvx8kMVm3XsUB3yn6sl6XktH7z3owdt0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            }
            height={24}
            width={24}
            alt={'mokx logo'}
          />
        )}
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
        <MemoizedReactMarkdown
          className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
    </div>
  )
}
