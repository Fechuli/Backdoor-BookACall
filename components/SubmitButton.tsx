import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface ButtonProps {
  isLoading: boolean
  className?: string
  children: React.ReactNode
}

const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
    <Button type='submit' disabled={isLoading} className={className ?? 'bg-[#bdff00] text-[#121619] w-full'}>
        {isLoading ? (
            <div className='flex items-center gap-4'>
                <Image src={'/icons/loader.svg'} alt='loader' height={24} width={24} className='animate-spin'/>
                Loading ...
            </div>
        ) : (children)}

    </Button>
  )
}

export default SubmitButton