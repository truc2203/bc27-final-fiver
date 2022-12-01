import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import userAPI from "../../../../apis/userAPI";
import { useDispatch } from "react-redux";
import { notification } from "antd";
const AuthorComment = ({ id }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const dispatch = useDispatch()
  const [content, setContent] = useState("");
  const [isPosted,setIsPosted] = useState(false)

  const cmtValue = {
    id: 0,
    maCongViec: Number(id),
    maNguoiBinhLuan: user?.user?.id !== null ? user?.user?.id : "",
    ngayBinhLuan: date,
    noiDung: content,
    saoBinhLuan: 5,
  };

  const handlePostComment = async (value) => {
    try {
      await userAPI.postComment(value);
      notification.success({
        message: "Đăng bình luận thành công",
      });
      setContent("");
      setIsPosted(!isPosted)
      dispatch({type:'postComment',isPosted})
    } catch (error) {
      notification.error({
        message: "Đăng bình luận thất bại",
      });
    }
  };

  if (!user || user.user.name === undefined) {
    return (
      <div className="jobDetail-gig pt-3 ">
        <NavLink to="/login" style={{ color: "#1dbf73" }}>
          Đăng Nhập
        </NavLink>{" "}
        để bình luận
      </div>
    );
  }
  return (
    <div>
      <p className="jobDetail-title">Comment</p>
      <div className="d-flex pt-3 align-items-center">
        <img
          className="me-3"
          style={{ width: "48px", height: "48px", borderRadius: "50%" }}
          src={user.user.avatar}
          alt=""
        />
        <div class="form-floating col-9">
          <textarea
            style={{ height: "80px" }}
            class="form-control rounded-3"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
      <button
        onClick={() => handlePostComment(cmtValue)}
        style={{ margin: "16px 0 0 64px" }}
        className="header-nav-btn"
      >
        Post
      </button>
    </div>
  );
};

export default AuthorComment;
