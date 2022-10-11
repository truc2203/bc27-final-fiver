import React, { useState } from "react";
import jobAPI from "../../../../apis/jobAPI";
import useRequest from "../../../../hook/useRequest";
import { useNavigate } from "react-router";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
const ListJob = ({ data }) => {
  const { job } = data;

  const [value,setValue] = useState('')

  if(job !== value)
  {
    setValue(job)
  }

  const { data: jobType } = useRequest(() => jobAPI.searchJob(value),{deps:[value]});
  const navigate = useNavigate();
  const handleJobDetail = (name, id) => {
    navigate(`../detail/${id}/${name}`);
  };
  return (
    <div className="d-flex flex-wrap">
      {jobType?.map((type) => {
        return (
          <div className="col-12 col-xl-3 col-lg-4 col-md-6 p-md-3 py-4 pt-md-3" key={type.id}>
            <img className="w-100" src={type.congViec.hinhAnh} alt="" />
            <div className="p-3 border listJob-main">
              <div className="d-flex align-items-center mb-3">
                <img
                  className="rounded-circle me-2"
                  style={{ width: "24px", height: "24px" }}
                  src={type.avatar}
                  alt=""
                />
                <div>
                  <p className="listJob-heading">{type.tenNguoiTao}</p>
                  <p className="listJob-subHeading">Lv1 Seller</p>
                </div>
              </div>
              <div className="mb-2">
                <button onClick={() => handleJobDetail(type.congViec.tenCongViec, type.id)}>
                  <p className="listJob-jobName mb-3">{type.congViec.tenCongViec}</p>
                </button>
                <p className="listJob-rate d-flex align-items-center">
                  <BsStarFill className="me-1" />
                  {type.congViec.saoCongViec}
                <span className="listJob-heading ps-2">({type.congViec.danhGia})</span>

                </p>
              </div>
              <div className="d-flex justify-content-between border-top pt-3">
                <p className="listJob-heard">
                  <BsHeartFill />
                </p>
                <button onClick={() => handleJobDetail(type.congViec.tenCongViec, type.id)}>
                  <p className="listJob-price">
                    STARTING AT <span className="listJob-prices">${type.congViec.giaTien}</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListJob;
