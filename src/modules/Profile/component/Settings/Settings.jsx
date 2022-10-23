import React, {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import userAPI from "../../../../apis/userAPI";
import { logout } from "../../../Authentication/slices/authSlice";
import { BiCertification } from "react-icons/bi";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
const dispatch = useDispatch()
  const {userInfo} = useSelector((state) => state.userManage)
  const navigate = useNavigate();
    const [isChange,setIsChange] = useState(false)
  const movePath = (path) => {
    navigate(path);
  };
  
  const handleLogout = () => {
    setIsChange(!isChange)
    dispatch(logout())
    navigate('/login')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: 0,
      name: userInfo.user.name,
      email: userInfo.user.email,
      phone: userInfo.user.phone,
      birthday: userInfo.user.birthday,
      gender: userInfo.user.gender,
      role: userInfo.user.role,
      skill : userInfo.user.skill,
      certification : userInfo.user.certification
    },
    mode: "onTouched",
  });

  const onSubmit = async (value) => {
    try {
        await userAPI.editUser(value,userInfo.user.id);
      notification.success({
        message: "Cập nhật thông tin thành công! Vui lòng đăng nhập lại",
      });
    handleLogout()
    } catch (error) {
      notification.error({
        message: "Cập nhật thông tin thất bại!",
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
        <div className="d-flex flex-column justify-content-center create-box">
          <div className="text-end jobDetail-gig pb-3">
            Need to update your public profile?{" "}
            <button
              onClick={() => movePath(`/profile/${user.user.id}`)}
              style={{ color: "#1dbf73" }}
            >
              Go to My Profile
            </button>
          </div>
          <form className="border p-4 w-100" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center col-12">
              <div className="d-flex col-12">
                <div className="d-flex flex-column col-3 pe-4">
                  <p className="jobDetail-gig">FULL NAME</p>
                </div>
                <div className="pb-4 d-flex flex-column justify-content-end align-items-baseline col-9 ps-4">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Tài khoản không được để trống",
                      },
                      minLength: {
                        value: 5,
                        message: "Tài khoản phải từ 5 đến 20 ký tự",
                      },
                      maxLength: {
                        value: 20,
                        message: "Tài khoản phải từ 5 đến 20 ký tự",
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
                  <p className="jobDetail-gig">EMAIL</p>
                </div>
                <div className=" col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email không được để trống",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email không đúng định dạng",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3 pe-4  flex-column">
                  <p className="jobDetail-gig">PHONE</p>
                </div>
                <div className=" col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Phone"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "SDT không được để trống",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3 pe-4  flex-column">
                  <p className="jobDetail-gig">GENDER</p>
                </div>
                <div className=" col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <select
                    className="form-control w-100"
                    type="text"
                    placeholder="Gender"
                    {...register("gender")}
                  >
                    <option value="true">Male</option>
                    <option value="false">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12">
                <div className="d-flex col-3 pe-4  flex-column">
                  <p className="jobDetail-gig">ROLE</p>
                </div>
                <div className=" col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <fieldset disabled>
                    <input
                      className="form-control w-100"
                      type="text"
                      placeholder="Role"
                      {...register("role", {
                        required: {
                          value: true,
                          message: "Ngày sinh không được để trống",
                        },
                      })}
                    />
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="text-center pb-4">
              <button className="header-nav-btn">Lưu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
