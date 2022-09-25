import React from 'react';
import ListJob from '../component/ListJob/ListJob'
import { useParams } from 'react-router';
import InfoJob from '../component/InfoJob/InfoJob';
const Categories = () => {

  const data = useParams()

  return (
    <div className='m-container'>
      <InfoJob data={data}/>
      <ListJob data={data}/>
    </div>
  )
}

export default Categories