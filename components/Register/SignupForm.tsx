'use client'

import React, { useRef } from 'react'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons'

export default function SignupForm() {
  const username = useRef('')
  const email = useRef('')
  const password = useRef('')

  const signupHandler = async () => {
    const result = await signIn('credentials', {
      username: username.current,
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: '/'
    })
  }
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your details and dive into a realm of
          <br /> ancient wisdom! 💫{' '}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-6">
          <Button
            onClick={() =>
              signIn('google', { redirect: true, callbackUrl: '/' })
            }
            variant="outline"
          >
            <Icons.google className="mr-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() =>
              signIn('facebook', { redirect: true, callbackUrl: '/' })
            }
            variant="outline"
          >
            <Icons.facebook className="mr-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() =>
              signIn('apple', { redirect: true, callbackUrl: '/' })
            }
            variant="outline"
          >
            <Icons.apple className="mr-2 h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={e => (email.current = e.target.value)}
            type="email"
            placeholder="m@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={e => (password.current = e.target.value)}
            id="password"
            type="password"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            onChange={e => (password.current = e.target.value)}
            id="confirm-password"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={signupHandler} className="w-full">
          Create account
        </Button>
      </CardFooter>
    </Card>
  )
}
