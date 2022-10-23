import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {notification } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jobAPI from "../../../apis/jobAPI";


const EditJob = () => {
 
  const user = JSON.parse(localStorage.getItem("user"));

  const { id: jobId } = useParams();

  const {jobDetail} = useSelector((state) => state.jobManage)

  const navigate = useNavigate();


  const movePath = (path) => {
    navigate(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: 0,
      tenCongViec:jobDetail.tenCongViec,
      danhGia: 0,
      giaTien: jobDetail.giaTien,
      hinhAnh:jobDetail.hinhAnh,
      nguoiTao: user.user.id,
      moTa: jobDetail.moTa,
      maChiTietLoaiCongViec: jobDetail.maChiTietLoaiCongViec,
      moTaNgan: jobDetail.moTaNgan,
      saoCongViec: 0,
    },
    mode: "onTouched",
  });

  const onSubmit = async (value) => {
    try {
      await jobAPI.editInfoJob(jobId,value)
      notification.success({
        message: "Cập nhật thông tin công việc thành công!",
      });
      movePath(`../profile/${user.user.id}`);
    } catch (error) {
      notification.error({
        message: "Cập nhật thông tin công việc thất bại",
        description: error,
      });
    }
  };


  useEffect(() => {
    if (user === null || user.user.role !== "ADMIN") {
      notification.warning({
        message: "You need to ADMIN account to access this page !",
      });
      movePath("/");
    }
  }, []);

  return (
    <div className="m-container">
      <div className="p-5">
        <div className="d-flex justify-content-center create-box">
          <form className="border p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center col-12 pb-5">
              <div className="d-flex col-12">
                <div className="d-flex flex-column col-3 pe-4">
                  <p className="jobDetail-gig">Gig Title</p>
                  <p>
                    As your Gig storefront, your title is the most important
                    place to include keywords that buyers would likely use to
                    search for a service like yours.
                  </p>
                </div>
                <div className="pb-4 d-flex flex-column justify-content-end align-items-baseline col-9 ps-4">
                  <input
                    style={{ height: "80px" }}
                    className="form-control w-100"
                    type="text"
                    defaultValue={jobDetail?.tenCongViec}
                    placeholder="I will do something I'm really good at"
                    {...register("tenCongViec", {
                      required: {
                        value: true,
                        message: "Title is required",
                      },
                      minLength: {
                        value: 5,
                        message: "Tilte must have 5 - 80 characters",
                      },
                      maxLength: {
                        value: 80,
                        message: "Tilte must have 5 - 80 characters",
                      },
                    })}
                  />
                  {errors.tenCongViec && (
                    <p className="pb-3" style={{ color: "red" }}>
                      {errors.tenCongViec.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3 pe-4  flex-column">
                  <p className="jobDetail-gig">Price</p>
                  <p>
                    Enter search terms you feel your buyers will use when
                    looking for your service.
                  </p>
                </div>
                <div className="pb-4 col-9 ps-4 d-flex flex-column justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    defaultValue={jobDetail?.giaTien}
                    placeholder="Price"
                    {...register("giaTien", {
                      required: {
                        value: true,
                        message: "Price is required",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: "Price must be a number",
                      },
                    })}
                  />
                  {errors.giaTien && (
                    <p className="pb-3" style={{ color: "red" }}>
                      {errors.giaTien.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3 pe-4  flex-column">
                  <p className="jobDetail-gig">Descrice</p>
                  <p>
                    Enter search terms you feel your buyers will use when
                    looking for your service.
                  </p>
                </div>
                <div className="pb-4 col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <input
                    defaultValue={jobDetail?.moTa}
                    className="form-control w-100"
                    type="text"
                    placeholder="Descrice"
                    {...register("moTa", {
                      required: {
                        value: true,
                        message: "",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3  flex-column">
                  <p className="jobDetail-gig">Sort Descrice</p>
                  <p>
                    Enter search terms you feel your buyers will use when
                    looking for your service.
                  </p>
                </div>
                <div className="pb-4 col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <input
                    defaultValue={jobDetail?.moTaNgan}
                    className="form-control w-100"
                    type="text"
                    placeholder="Sort Descrice"
                    {...register("moTaNgan", {
                      required: {
                        value: true,
                        message: "",
                      },
                    })}
                  />
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

export default EditJob;
