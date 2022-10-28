import React from 'react'
import { useParams } from 'react-router'
import AuthorComment from '../component/AuthorComment'
import BookingJob from '../component/BookingJob/BookingJob'
import Comments from '../component/Comments'
import JD from '../component/JD'

const JobDetail = () => {

  const {id} = useParams()
  return (
    <div className='m-container'>
      <div className="py-4">
      <div className="d-flex jobDetail-main">
        <div className="col-lg-8 col-12 jobDetail-page">
            <JD id={id}/>
            <Comments id={id}/>
            <AuthorComment id={id}/>
        </div>
        <div className="col-lg-4 col-12 d-lg-flex d-none">
            <BookingJob jobId={id}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default JobDetail