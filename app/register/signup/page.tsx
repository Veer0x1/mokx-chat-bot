import React, { FunctionComponent } from 'react'
import LoginForm from '@/components/Register/LoginForm'
import Link from 'next/link'
import SignupForm from '@/components/Register/SignupForm'

interface OwnProps {}

type Props = OwnProps

const page: FunctionComponent<Props> = props => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1">
        <main>
          <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
              <SignupForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page
