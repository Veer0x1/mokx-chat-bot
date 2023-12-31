'use client'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import facebook from '@/public/facebook.png'
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
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export function Register() {
  return (
    <Card className={'bg-[#69235B]'}>
      <CardHeader className={'items-start text-start text-white sm:text-5xl'}>
        <CardTitle className={'leading-tight'}>
          Discover the <br /> timeless wisdom the
          <br />
          <span className={'text-[#FBBC04]'}>of Vedas</span>
        </CardTitle>

        <CardDescription className={'text-white sm:text-xl'}>
          Sign up and{' '}
          <span className={'text-[#FBBC04]'}>
            {' '}
            journey through ancient <br /> knowledge with Arya 🌟
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 items-center justify-center sm:mx-4">
          <div className="flex flex-col items-center justify-center">
          <Label
              htmlFor="google"
              onClick={() => {
                signIn('google', { callbackUrl: '/' })
              }}
              className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 border-muted bg-[#69235B] text-center transition-all duration-300 hover:border-primary sm:h-16 sm:w-16 sm:p-4"
          >
            <RadioGroupItem value="google" id="google" className="sr-only" />
            <Icons.google className="h-6 w-6" />
          </Label>
            </div>
          <div className="flex flex-col items-center justify-center">
          <Label
              htmlFor="facebook"
              className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 border-muted bg-[#69235B] p-2 text-center transition-all duration-300 hover:border-primary sm:h-16 sm:w-16 sm:p-4"
          >
            <RadioGroupItem value="facebook" id="facebook" className="sr-only" />
            {/*<Icons.facebook className="mb-3 h-6 w-6 text-white" />*/}
            <Image src={facebook} alt="facebook" />
          </Label>
          </div>
          <div className="flex flex-col items-center justify-center">
          <Label
              htmlFor="apple"
              className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-2 border-muted bg-[#69235B] p-2 text-center transition-all duration-300 hover:border-primary sm:h-16 sm:w-16 sm:p-4"
          >
            <RadioGroupItem value="apple" id="apple" className="sr-only" />
            <Icons.apple className="h-8 w-8 text-white" />
          </Label>
            </div>
        </RadioGroup>


        <div className="relative">
          <div className="absolute inset-0 flex items-center ">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase ">
            <span className="bg-[#69235B] px-2 text-white">
              Or continue with
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#FBBC04] text-[#69235B] hover:bg-white">
          Signup With Email
        </Button>
      </CardFooter>
      <p className="m-4 mb-8 px-8 text-center text-white sm:text-lg">
        Existing account?{' '}
        <Link
          href={"/register/login"}
          className="text-[#FBBC04] underline underline-offset-4 hover:text-white"
        >
          Log in
        </Link>{' '}
      </p>
    </Card>
  )
}
