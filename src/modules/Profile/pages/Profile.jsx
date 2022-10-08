import React from 'react'
import { useParams } from 'react-router'
import BookedJob from '../component/BookedJob'
import Information from '../component/Infomation/Information'

const Profile = () => {
  const {id} = useParams()
  return (
    <div className='p-5'>
        <div className='d-flex m-container'>
            <div className="col-4 pe-5">
                <Information userId={id}/>
            </div>
            <div className='col-8 ps-5'>
                <BookedJob userId={id}/>
            </div>
        </div>
    </div>
  )
}

export default Profile