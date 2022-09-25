import React from 'react';
import ListJob from '../component/ListJob/ListJob'
import { useParams } from 'react-router';
const Categories = () => {

  const data = useParams()

  return (
    <div className='m-container'>
      <ListJob data={data}/>
    </div>
  )
}

export default Categories