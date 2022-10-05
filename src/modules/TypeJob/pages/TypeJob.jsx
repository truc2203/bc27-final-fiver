import React from 'react'
import { useParams } from 'react-router'

import TypeJobHeading from '../component/TypeJobHeading/TypeJobHeading'
import TypeJobListLeft from '../component/TypeJobListLeft/TypeJobListLeft'
const TypeJob = () => {
  const {job} =  useParams()

  return (
    <div className='m-container'>
      <TypeJobHeading id={job} />
      <div className='d-flex'>
          <div className="col-12">
            <TypeJobListLeft id={job}/>
          </div>
      </div>
    </div>
  )
}

export default TypeJob