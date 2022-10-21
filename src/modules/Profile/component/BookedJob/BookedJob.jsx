import React, { useEffect, useState } from "react";
import useRequest from "../../../../hook/useRequest";
import userAPI from "../../../../apis/userAPI";
import { BiDetail, BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router";
import jobAPI from "../../../../apis/jobAPI";
import { notification } from "antd";
const BookedJob = ({ userId }) => {
  const [isDelete,setIsDelete] = useState(false)

  const { data: booked } = useRequest(() => userAPI.getBookedById(),{deps:[isDelete]});
  const navigate = useNavigate()
  const movePath = (path) => {
    navigate(`../${path}`)
  }

  const handleDeleteJob = async (id) => {
      try {
        await jobAPI.deleteJob(id)
        notification.success({
          message:'Delete Job Successful!'
        })
        setIsDelete(!isDelete)
      } catch (error) {
        notification.error({
          message:'Delete Job Failed!',
          description:error
        })
      }
  }

  return (
    <div>
      <div className="d-flex p-4 rounded-1 border justify-content-between align-items-center mb-4">
        <p className="jobDetail-gig">It seems that you don't have any job</p>
        <button onClick={() => movePath('profile/createJob')} className="header-nav-btn">Create a new job</button>
      </div>
      
      <div className="d-flex p-3 rounded-1 border flex-column">
        <p className="profile-user-label pb-2">Your Job</p>
        {booked?.map((booked) => {
          if(booked.nguoiTao === 30)
          {
            return (
              <div
                className="d-flex align-items-center p-3 border border-3"
                key={booked.id}
              >
                <div className="d-flex flex-column col-3 pe-3">
                  <img className="rounded-2" src={booked.hinhAnh} alt="" />
                  <div className=" d-flex justify-content-evenly pt-2">
                    <button className="position-relative bookedJob-item ">
                      <BiDetail fontSize="20px" />
                      <div
                        style={{ fontSize: "14px" }}
                        className="position-absolute bookedJob-item-detail gig"
                      >
                        View Detail
                      </div>
                    </button>
                    <button onClick={() => movePath(`profile/editJob/${booked.id}`)} className="position-relative bookedJob-item">
                      <BiEdit fontSize="20px" />
                      <div
                        style={{ fontSize: "14px" }}
                        className="position-absolute bookedJob-item-edit gig"
                      >
                        Edit
                      </div>
                    </button>
                    <button onClick={() => handleDeleteJob(booked.id)} className="position-relative bookedJob-item ">
                      <BiTrash fontSize="20px" />
                      <div
                        style={{ fontSize: "14px" }}
                        className="position-absolute bookedJob-item-delete gig"
                      >
                        Delete
                      </div>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-column col-9">
                  <p className="bookedJob-hd">{booked.tenCongViec}</p>
                  <p className="bookedJob-text">{booked.moTa}</p>
                </div>
              </div>
            )
          }
          return 
        })}
      </div>
    </div>
  );
};

export default BookedJob;
