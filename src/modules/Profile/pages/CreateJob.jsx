import React, { useState, useEffect } from "react";
import authAPI from "../../../apis/authAPI";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";

import { useNavigate } from "react-router-dom";
import jobAPI from "../../../apis/jobAPI";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const CreateJob = () => {
  const items = [
    getItem(
      <NavLink to="/user">Users Manage</NavLink>,
      "sub1",
      <UserOutlined />
    ),
    getItem(
      <NavLink to="../jobs">Jobs Manage</NavLink>,
      "sub2",
      <VideoCameraOutlined />
    ),
  ];

  const user = JSON.parse(localStorage.getItem("user"));

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const [imgPreview, setImgPreview] = useState("");

  const movePath = (path) => {
    navigate(path);
  };

  const { register, handleSubmit,setValue } = useForm({
    defaultValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: user.user.id,
      hinhAnh: '595593-abstract-3D-digital_art.jpg',
      moTa: "",
      maChiTietLoaiCongViec: 2,
      moTaNgan: "",
      saoCongViec: 0,
    },
    mode: "onTouched",
  });

  const onSubmit = async (value,id) => {
    try {
      await jobAPI.addJob(value,1);
      notification.success({
        message: "Add Job Successful!",
      });
      movePath(`../profile/${user.user.id}`);
    } catch (error) {
      notification.error({
        message: "Add Job Failed!",
        description: error,
      });
    }
  };


  const handleChangeImage = (evt) => {
    // Đối với input type là file, có sẽ không dùng event.target.value mà thay thể bằng event.target.files
    const file = evt.target.files[0];

    if (!file) return;

    // Lưu file vào field hinhAnh của hook form
    setValue("hinhAnh", file);

    // Xử lý hiển thị hình ảnh ra giao diện
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // bất đồng bộ
    fileReader.onload = (evt) => {
      // Đọc file thành công
      // evt.target.result: string base64
      setImgPreview(evt.target.result);
    };
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
      <div className="pb-5"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-center">
          <div className="col-6 m-2">
            <div className="pb-4 d-flex justify-content-center">
              <input
                className="form-control w-75"
                type="text"
                placeholder="Name"
                {...register("tenCongViec", {
                  required: {
                    value: true,
                    message: "Tên công việc không được để trống",
                  },
                  minLength: {
                    value: 5,
                    message: "Tên công việc phải từ 5 đến 20 ký tự",
                  },
                  maxLength: {
                    value: 20,
                    message: "Tên công việc phải từ 5 đến 20 ký tự",
                  },
                })}
              />
            </div>

            <div className="pb-4 d-flex justify-content-center">
              <input
                className="form-control w-75"
                type="text"
                placeholder="Price"
                {...register("giaTien", {
                  required: {
                    value: true,
                    message: "Giá tiền phải là số",
                  },
                })}
              />
            </div>
            <div className="pb-4 d-flex justify-content-center">
              <input
                className="form-control w-75"
                type="text"
                placeholder="Descrice"
                {...register("moTa", {
                  required: {
                    value: true,
                    message: "",
                  },
                })}
              />
            </div><div className="pb-4 d-flex justify-content-center">
              <input
                className="form-control w-75"
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
            <div className="pb-4">
                {/* <input cl5ssName="inputAddMovie w-75" type="file" placeholder="Hình Ảnh" {...register("hinhAnh")} /> */}
                <div className="d-inline-block w-15 text-end">Hình Ảnh : </div>
                <input
                  className="ms-1 "
                  type="file"
                  placeholder="Hình Ảnh"
                  onChange={handleChangeImage}
                />
                {imgPreview && <img src={imgPreview} alt="preview" style={{width:'200px', height:'260px'}} />}
              </div>
          </div>
         
        </div>
        <div className="text-center pb-4">
          <button className="header-nav-btn">Xác Nhận</button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
