import React, { useEffect, useState } from 'react'
import useRequest from '../../../../hook/useRequest'
import jobAPI from '../../../../apis/jobAPI'
const TypeJobHeading = ({id}) => {

  const [value,setValue] = useState(0)

  if(id !== value)
  {
    setValue(id)
  }

  const {data : subtype} = useRequest(() => jobAPI.getSubTypeJob(value),{deps:[value]})

  return (
    <div className='p-4'>
      {subtype?.map(sub => (
        <h1 key={sub.id} className='typeJob-hd'>{sub.tenLoaiCongViec}</h1>
      ))}
      <p className='text-center typeJob-subhd'>Build your brand. Grow your business.</p>
    </div>
  )
}

export default TypeJobHeading