import React from "react";
import useRequest from "../../../../hook/useRequest";
import userAPI from "../../../../apis/userAPI";
import { BiDetail, BiEdit, BiTrash } from "react-icons/bi";
const BookedJob = ({ userId }) => {
  const { data: booked } = useRequest(() => userAPI.getBookedById());
  console.log(booked);
  return (
    <div>
      <div className="d-flex p-4 rounded-1 border justify-content-between align-items-center mb-4">
        <p className="jobDetail-gig">It seems that you don't have any active Gigs</p>
        <button className="header-nav-btn">Create a new Gig</button>
      </div>
      <div className="d-flex p-3 rounded-1 border flex-column">
        {booked?.map((booked) => (
          <div
            className="d-flex align-items-center p-3 border border-3"
            key={booked.id}
          >
            <div className="d-flex flex-column col-3 pe-3">
              <img className="rounded-2" src={booked.congViec.hinhAnh} alt="" />
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
                <button className="position-relative bookedJob-item">
                  <BiEdit fontSize="20px" />
                  <div
                    style={{ fontSize: "14px" }}
                    className="position-absolute bookedJob-item-edit gig"
                  >
                    Edit
                  </div>
                </button>
                <button className="position-relative bookedJob-item ">
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
              <p className="bookedJob-hd">{booked.congViec.tenCongViec}</p>
              <p className="bookedJob-text">{booked.congViec.moTa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedJob;
