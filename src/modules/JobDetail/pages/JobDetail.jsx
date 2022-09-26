import React from 'react'
import { useParams } from 'react-router'
import Gig from '../component/Gig/Gig'
import JD from '../component/JD'
const JobDetail = () => {

  const data = useParams()
  const {id} = data  
  return (
    <div className='m-container'>
      <div className="p-4">
      <div className="d-flex align-items-center">
        <div className="col-8 jd-page">
            <JD id={id}/>
            <Gig/>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
    </div>
  )
}

export default JobDetail