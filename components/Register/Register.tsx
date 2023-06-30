'use client'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export function Register() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Discover the timeless wisdom of Vedas
          <br />
          {/*<span className={'text-yellow-400'}>of Vedas</span>*/}
        </CardTitle>
        <CardDescription>
          Sign up and {/*<span className={'text-yellow-400'}>*/} joruney thorugh
          ancient knowledge with Arya
          {/*</span>*/}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          <Label
            htmlFor="google"
            onClick={() => {
              signIn('google', { callbackUrl: '/' })
            }}
            className="flex  flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="google" id="google" className="sr-only" />
            <Icons.google className="mb-3 h-6 w-6" />
            Google
          </Label>
          <Label
            htmlFor="facebook"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
            <Icons.facebook className="mb-3 h-6 w-6" />
            Facebook
          </Label>
          <Label
            htmlFor="apple"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="apple" id="apple" className="sr-only" />
            <Icons.apple className="mb-3 h-6 w-6" />
            Apple
          </Label>
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
      </CardContent>
      <CardFooter>
        <Button className="w-full">Signup With Email</Button>
      </CardFooter>
      <p className="m-4 mb-8 px-8 text-center text-sm text-muted-foreground">
        Existing account?{' '}
        <Link
          href="/register/login"
          className="underline underline-offset-4 hover:text-primary"
        >
          Login
        </Link>{' '}
      </p>
    </Card>
  )
}
