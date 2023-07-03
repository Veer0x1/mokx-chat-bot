import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { auth } from '@/auth'
import { clearChats } from '@/app/actions'
import { Sidebar } from '@/components/sidebar'
import { SidebarList } from '@/components/sidebar-list'
import { IconNextChat, IconSeparator } from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'
import { LoginButton } from '@/components/login-button'
import logo from '@/public/MOkx logo 2.png'
import { Button } from '@/components/ui/button'

export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">
        {session?.user ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={session?.user?.id} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            {/*<IconNextChat className="mr-2 h-6 w-6 dark:hidden" inverted />*/}
            {/*<IconNextChat className="mr-2 hidden h-6 w-6 dark:block" />*/}
            <Image src={logo} alt="MOkx logo" width={60} height={60} />
          </Link>
        )}
        <div className="flex items-center">
          <IconSeparator className="h-6 w-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            // <LoginButton
            //   variant="link"
            //   showGithubIcon={true}
            //   text="Login"
            //   className="-ml-2"
            // />
            <Link href={'/register'}>
              <Button variant="outline" className="ml-2">
                LogIn
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <ThemeToggle />
      </div>
    </header>
  )
}
