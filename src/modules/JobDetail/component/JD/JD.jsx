import React from "react";
import useRequest from "../../../../hook/useRequest";
import jobAPI from "../../../../apis/jobAPI";
import { AiFillStar } from "react-icons/ai";
const JD = ({ id }) => {
  const { data: jd } = useRequest(() => jobAPI.getJobDetail(id));
    console.log(jd);
  if (!jd) {
    return;
  }
  return (
    <>
    <p className="jd-title pb-4">{jd.name}</p>
          <div className="d-flex pb-4">
            <img
              className="rounded-circle me-3"
              style={{ width: "30px", height: "30px" }}
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/461c94959a48ebe45f55673a681eaf1e-1633139902605/7e45b689-f024-4045-8a00-42868263714c.jpg"
              alt=""
            />
            <p className="lj-hd">{jd.userCreated} <span className="ps-2 lj-subhd">Level1 Seller</span></p>
            <p className="px-2">|</p>
            <div style={{fontSize:'20px'}} className="d-flex align-items-start lj-rate">
              <AiFillStar />
              {jd.rating}
            </div>
            <span className="lj-subhd px-2">3 Order in Queue</span>
          </div>
          <div>
            <img className="w-100 jd-img" src={jd.image} alt="" />
          </div>
    </>
  );
};

export default JD;
