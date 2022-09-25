import React from "react";
import jobAPI from "../../../../apis/jobAPI";
import useRequest from "../../../../hook/useRequest";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
const ListJob = ({ data }) => {
  const { job } = data;
  const { data: jobType } = useRequest(() => jobAPI.searchJob(job));
  console.log(jobType);

  return (
    <div className="d-flex flex-wrap">
      {jobType?.map((type) => {
        return (
          <div className="col-3 p-3" key={type._id}>
            <img className="w-100" src={type.image} alt="" />
            <div className="p-3 border lj-main" >
              <div className="d-flex align-items-center mb-3">
                <img
                  className="rounded-circle me-2"
                  style={{width:'24px', height:'24px'}}
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/da7d5a0e1cba3499c52d6ec20f7e82fe-1648494284312/593c252a-9f69-4e99-8672-989cba7d080d.jpg"
                  alt=""
                />
                <div>
                  <p className="lj-hd">{type.userCreated}</p>
                  <p className="lj-subhd">Lv1 Seller</p>
                </div>
              </div>
              <div className="mb-2">
                <p className="lj-name mb-3">{type.name}</p>
                <p className="lj-rate d-flex align-items-center">
                  <BsStarFill />
                  {type.rating}
                </p>
              </div>
              <div className="d-flex justify-content-between border-top pt-3">
                <p className="lj-heard">
                  <BsHeartFill />
                </p>
                <p className="lj-price">STARTING AT <span className="lj-prices">${type.price}</span></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListJob;
