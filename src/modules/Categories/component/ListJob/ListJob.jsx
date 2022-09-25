import React from 'react';
import jobAPI from '../../../../apis/jobAPI';
import useRequest from '../../../../hook/useRequest';
const ListJob = ({data}) => {
  const {job} = data
  const {
    data : jobType,
  } = useRequest(() => jobAPI.searchJob(job))
  console.log(jobType);

  return (
    <div className='d-flex flex-wrap'>
      {jobType?.map((type) => {
        return(
          <div className='col-3 p-3' key={type._id}>
            <img className='w-100' src={type.image} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default ListJob