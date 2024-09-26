import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { LastCheckInterface } from '@/types'

interface CardProps extends LastCheckInterface {
  onClick: () => void
}

const Card = ({ value, status, date, onClick }: CardProps) => {
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric', 
    month: 'long',  
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true        
  });

  return (
    <div className='flex flex-col w-[200px] sm:w-[400px]'>
      <div className='h-[185px] sm:h-[285px] bg-blueSky rounded-t-3xl justify-center items-center flex text-[50px] sm:text-[96px] font-bold'>
        {value}
      </div>
      <div className='bg-white py-6 px-5 rounded-b-3xl'>
        <div className='text-xl font-bold'>{status}</div>
        <div className='text-lg text-brownCustom'>Calculated on {formattedDate}</div>
      </div>
      <div className='bg-whiteSmoke flex justify-center items-center py-4'>
        <Button
          text="Read Advice"
          className='bg-orangeCustom text-black'
          icon={
            <Image src="/icons/chevron-right.svg"
              alt='icon'
              height={30}
              width={30}
            />
          }
          onClick={onClick}
          iconPosition="right"
        />
      </div>
    </div>
  )
}

export default Card