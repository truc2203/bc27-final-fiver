import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import jobAPI from "../../../apis/jobAPI";


const EditGallary = () => {
 
  const user = JSON.parse(localStorage.getItem("user"));

  const { id: jobId } = useParams();
  
  const navigate = useNavigate();

  const [imgPreview, setImgPreview] = useState("");

  const movePath = (path) => {
    navigate(path);
  };

  const {
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
    hinhAnh:''
    },
    mode: "onTouched",
  });

  const onSubmit = async (value) => {
    try {
      await jobAPI.editJob(jobId,value)
      notification.success({
        message: "Cập nhật hình ảnh thành công!",
      });
      movePath(`../profile/${user.user.id}`);
    } catch (error) {
      notification.error({
        message: "Cập nhật hình ảnh thất bại",
        description: error,
      });
    }
  };

  const handleChangeImage = (evt) => {
    const file = evt.target.files[0];

    if (!file){
      return
    }

    setValue("hinhAnh", file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      setImgPreview(evt.target.result);
    };
  };

  useEffect(() => {
    if (user === null ) {
      notification.warning({
        message: "Tài khoản của bạn không có quyền quản trị!",
      });
      movePath("/");
    }
  }, []);

  return (
    <div className="m-container">
      <div className="p-5">
        <div className="d-flex justify-content-center create-box">
          <form className="border p-4" onSubmit={handleSubmit(onSubmit)}>       
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3  flex-column">
                  <p className="jobDetail-gig">Gallary</p>
                  <p>
                    Chose galaary you feel your buyers will use when looking for
                    your service.
                  </p>
                </div>
                <div className="pb-4 col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <input
                    className="ms-1 "
                    type="file"
                    placeholder="Hình Ảnh"
                    onChange={handleChangeImage}
                  />
                  {imgPreview && (
                    <img
                      src={imgPreview}
                      alt="preview"
                      style={{ width: "320px", height: "240px" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="text-center pb-4">
              <button className="header-nav-btn">Xác Nhận</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditGallary;
