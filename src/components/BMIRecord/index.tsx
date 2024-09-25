import Card from '@/components/Card'
import React from 'react'

interface BMIRecordProps {
  data: Array<{ value: number; status: string; date: string; }>
}

const BMIRecord = ({ data }: BMIRecordProps) => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col justify-center items-center bg-orangeCustom py-4 rounded-full'>
        <div className='text-4xl'>Last <strong>BMI Record</strong></div>
      </div>
      <div className='flex gap-10 flex-wrap items-center justify-center'>
        {data?.map((item, index) => (
          <Card key={index} value={item.value} status={item.status} date={item.date} />
        ))}
      </div>
    </div>
  )
}

export default BMIRecord