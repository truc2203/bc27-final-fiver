import React from "react";
import useRequest from "../../../../hook/useRequest";
import jobAPI from "../../../../apis/jobAPI";
import {
  AiOutlineComment,
  AiFillStar,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { useState } from "react";
const Comments = ({ id }) => {
  const { data: comment } = useRequest(() => jobAPI.getComments(id));
  console.log(comment);
  const [helful, setHelful] = useState(null);
  if (!comment) {
    return;
  }
  return (
    <div className="pb-3 pb-lg-5">
      {comment?.map((cmt) => {
        return (
          <div key={cmt.id} className="d-flex py-5 border-bottom">
            <div className="pe-3">
              <img
                className="rounded-circle"
                style={{ width: "48px", height: "48px" }}
                src={cmt.avatar ? cmt.avatar : 'https://cdn5.vectorstock.com/i/1000x1000/73/64/text-user-icon-avatar-icon-vector-15887364.jpg'}
                alt=""
              />
            </div>
            <div className="d-flex w-100">
              <div>
                <p className="jobDetail-gig pb-3">
                  {cmt.tenNguoiBinhLuan ? cmt.tenNguoiBinhLuan : "Guest"} <AiOutlineComment />{" "}
                  <span>99 Reviews</span>
                </p>
                <div className="d-flex align-items-center pb-3">
                  <img
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f0-1f1f7.png"
                    alt=""
                  />
                  <div className="comment-country">South Korea</div>
                </div>
                <div className="d-flex pb-3 jobDetail-gig ">
                  <span style={{ color: "#ffb33e" }}>
                    {cmt.saoBinhLuan}
                    <AiFillStar />
                    {/* <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar /> */}
                  </span>
                  <span className="px-2">|</span>
                  <span>{cmt.ngayBinhLuan}</span>
                </div>
                <div className="pb-3 comment-content">{cmt.noiDung}</div>
                <div className="d-flex jobDetail-gig">
                  <span className="pe-3">Helful?</span>
                  <button
                    onClick={() => setHelful(true)}
                    className="d-flex align-items-center pe-3"
                  >
                    <span>
                      <AiOutlineLike  />
                      <span>Yes</span>
                    </span>{" "}
                  </button>
                  <button
                    onClick={() => setHelful(false)}
                    className="d-flex align-items-center"
                  >
                    <span>
                      <AiOutlineDislike  />
                      <span>No</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
