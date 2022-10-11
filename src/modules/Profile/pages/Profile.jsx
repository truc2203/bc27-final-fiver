import React from 'react'
import { useParams } from 'react-router'
import BookedJob from '../component/BookedJob'
import Information from '../component/Infomation/Information'

const Profile = () => {
  const {id} = useParams()
  return (
    <div className='py-5 m-container'>
        <div className='d-flex flex-xl-row flex-column'>
            <div className="col-xl-4 col-12 pe-0 pe-xl-5 pb-4 pb-xl-0">
                <Information userId={id}/>
            </div>
            <div className='col-xl-8 col-12 ps-0 pe-xl-0'>
                <BookedJob userId={id}/>
            </div>
        </div>
    </div>
  )
}

export default Profile