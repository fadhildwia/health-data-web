/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../Button'
import Image from 'next/image'

interface HeaderProps {
  onClickGoToCalculator: () => void;
  onClickYourChart: () => void;
}

const Header = ({ onClickGoToCalculator, onClickYourChart }: HeaderProps) => {
  return (
    <div className='flex flex-wrap-reverse sm:flex-row gap-4 items-center justify-around'>
      <div className='flex flex-col gap-12'>
        <div>
          <h1 className='text-[20px] sm:text-[64px] leading-none'>Check your <strong>BMI</strong></h1>
          <h2 className='text-[15px] sm:text-[50px] text-brownCustom leading-none'>Get <strong>Personalized Advice</strong></h2>
        </div>
        <div className='flex'>
          <Button
            text="Go to BMI Calculator"
            className='bg-orangeCustom text-black sm:h-20 sm:w-72'
            icon={
              <Image src="/icons/chevron-right.svg"
                alt='icon'
                height={30}
                width={30}
              />
            }
            onClick={onClickGoToCalculator}
            iconPosition="right"
          />
          <Button
            text="Your BMI Chart"
            className=' text-black sm:h-20 sm:w-72'
            icon={
              <Image src="/icons/play-circle.svg"
                alt='icon'
                height={30}
                width={30}
              />
            }
            onClick={onClickYourChart}
            iconPosition="left"
          />
        </div>
      </div>
      <img
        className='w-[160px] sm:w-[640px]'
        src="/header.png"
        alt="header"
      />
    </div>
  )
}

export default Header