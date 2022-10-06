import React from 'react'
import BookedJob from '../component/BookedJob'
import Information from '../component/Infomation/Information'

const Profile = () => {
  return (
    <div className='p-5'>
        <div className='d-flex m-container'>
            <div className="col-4">
                <Information/>
            </div>
            <div className='col-8'>
                <BookedJob/>
            </div>
        </div>
    </div>
  )
}

export default Profile