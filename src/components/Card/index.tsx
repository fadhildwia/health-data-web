import React from 'react'
import Button from '../Button'
import Image from 'next/image'

interface CardProps {
  value: number
  status: string
  date: string
}

const Card = ({ value, status, date }: CardProps) => {
  return (
    <div className='flex flex-col'>
      <div className='h-[185px] sm:h-[285px] bg-blueSky rounded-t-3xl justify-center items-center flex text-[50px] sm:text-[96px] font-bold'>
        {value}
      </div>
      <div className='bg-white py-6 px-5 rounded-b-3xl'>
        <div className='text-xl font-bold'>{status}</div>
        <div className='text-lg text-brownCustom'>Calculated on {date}</div>
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
          onClick={() => {}}
          iconPosition="right"
        />
      </div>
    </div>
  )
}

export default Card