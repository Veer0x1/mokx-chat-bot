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
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'
import facebook from '@/public/facebook.png'

export default function LoginForm() {
  const email = useRef('')
  const password = useRef('')

  const loginHandler = async () => {
    const result = await signIn('credentials', {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: '/'
    })
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="relative mb-6 text-2xl text-[#69235B]">
          <span className="relative">
            Log in{' '}
            <span className="absolute bottom-0 left-0 z-0 h-2 w-full bg-yellow-400 opacity-75"></span>
          </span>
          to Mokx
        </CardTitle>

        <CardDescription className={'text-[#69235B]'}>
          Welcome back! Sign in using your socials account <br />
          or email to continue us
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <RadioGroup
          defaultValue="card"
          className="grid grid-cols-3 items-center justify-center sm:mx-4"
        >
          <div className="flex flex-col items-center justify-center">
            <Label
              htmlFor="google"
              onClick={() => {
                signIn('google', { callbackUrl: '/' })
              }}
              className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-muted text-center transition-all duration-300 hover:border-primary sm:h-16 sm:w-16 sm:p-4"
            >
              <RadioGroupItem value="google" id="google" className="sr-only" />
              <Icons.google className="h-6 w-6" />
            </Label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Label
              htmlFor="facebook"
              className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-muted p-2 text-center transition-all duration-300 hover:border-primary sm:h-16 sm:w-16 sm:p-4"
            >
              <RadioGroupItem
                value="facebook"
                id="facebook"
                className="sr-only"
              />
              {/*<Icons.facebook className="mb-3 h-6 w-6 text-white" />*/}
              <Image src={facebook} alt="facebook" />
            </Label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Label
              htmlFor="apple"
              className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-muted p-2 text-center transition-all duration-300 hover:border-primary sm:h-16 sm:w-16 sm:p-4"
            >
              <RadioGroupItem value="apple" id="apple" className="sr-only" />
              <Icons.apple className="h-8 w-8" />
            </Label>
          </div>
        </RadioGroup>

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

        <div className="grid gap-2 text-[#69235B]">
          <Label htmlFor="email">Your email</Label>
          <Input
            onChange={e => (email.current = e.target.value)}
            id="email"
            type="email"
          />
        </div>

        <div className="grid gap-2 text-[#69235B]">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={e => (password.current = e.target.value)}
            id="password"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={loginHandler}
          className="w-full bg-[#FBBC04] text-[#69235B] hover:bg-white"
        >
          Log In
        </Button>
      </CardFooter>
      <p className="m-4 mb-8 px-8 text-center text-sm text-muted-foreground">
        <Link
          href={"/forgot-password"}
          className="text-[#69235B] underline underline-offset-4 hover:text-primary"
        >
          Forgot password?
        </Link>{' '}
      </p>
    </Card>
  )
}
