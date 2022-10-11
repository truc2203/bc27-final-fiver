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
          <div key={cmt._id} className="d-flex py-5 border-bottom">
            <div className="pe-3">
              <img
                className="rounded-circle"
                style={{ width: "48px", height: "48px" }}
                src={cmt.user ? cmt.user.avatar : ""}
                alt=""
              />
            </div>
            <div className="d-flex w-100">
              <div>
                <p className="gig pb-3">
                  {cmt.user ? cmt.user.email : "Guest"} <AiOutlineComment />{" "}
                  <span>99 Reviews</span>
                </p>
                <div className="d-flex align-items-center pb-3">
                  <img
                    className="me-2"
                    style={{ width: "20px", height: "20px" }}
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f0-1f1f7.png"
                    alt=""
                  />
                  <div className="cmt-country">South Korea</div>
                </div>
                <div className="d-flex pb-3">
                  <span style={{ color: "#ffb33e" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span className="px-2">|</span>
                  <span>5 days ago</span>
                </div>
                <div className="pb-3 cmt-content">{cmt.content}</div>
                <div className="d-flex gig">
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
