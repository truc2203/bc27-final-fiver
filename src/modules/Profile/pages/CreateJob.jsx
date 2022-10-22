import React, { useState, useEffect } from "react";
import authAPI from "../../../apis/authAPI";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";

import { useNavigate } from "react-router-dom";
import jobAPI from "../../../apis/jobAPI";
import useRequest from "../../../hook/useRequest";
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

  const [category, setCategory] = useState(0);


  const [subCategory, setSubCategory] = useState(0);

  console.log(subCategory);

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const { data: list } = useRequest(() => jobAPI.getTypeJob());

  const { data: subList } = useRequest(() => jobAPI.getTypeJobById(category), {
    deps: [category],
  });
  const { register, handleSubmit,setValue } = useForm({
    defaultValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: null,
      nguoiTao: user.user.id,
      hinhAnh:
        "https://assets-global.website-files.com/606a802fcaa89bc357508cad/62291b5f923ec472a68d77ea_Blog%20-%201%20(2).png",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
    mode: "onTouched",
  });

  const handleSubCategory = (e) =>{
    setSubCategory(e.target.value)
    setValue('maChiTietLoaiCongViec',subCategory)
  }

  const onSubmit = async (value) => {
    try {
      await jobAPI.addJob(value);
      notification.success({
        message: "Add Job Successful!",
      });
      console.log(value);
      movePath(`../profile/${user.user.id}`);
    } catch (error) {
      notification.error({
        message: "Add Job Failed!",
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
                <div className="d-flex flex-column col-3 pe-4" >
                  <p className="jobDetail-gig">Gig Title</p>
                  <p>
                    As your Gig storefront, your title is the most important
                    place to include keywords that buyers would likely use to
                    search for a service like yours.
                  </p>
                </div>
                <div className="pb-4 d-flex justify-content-end align-items-baseline col-9 ps-4">
                  <input
                    style={{ height: "80px" }}
                    className="form-control w-100"
                    type="text"
                    placeholder="I will do something I'm really good at"
                    {...register("tenCongViec", {
                      required: {
                        value: true,
                        message: "Tên công việc không được để trống",
                      },
                      minLength: {
                        value: 5,
                        message: "Tên công việc phải từ 5 đến 80 ký tự",
                      },
                      maxLength: {
                        value: 80,
                        message: "Tên công việc phải từ 5 đến 80 ký tự",
                      },
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 pb-5">
              <div className="d-flex col-12">
                <div className="d-flex flex-column col-3 pe-4" >
                  <p className="jobDetail-gig">Category</p>
                  <p>
                    Choose the category and sub-category most suitable for your
                    Gig.
                  </p>
                </div>
                <div className="pb-4 d-flex justify-content-end align-items-baseline col-9 ps-4">
                  <select
                    
                    class="form-select w-50 me-3"
                    aria-label="Default select example"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option selected>SELECT A CATEGORY</option>
                    {list?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.tenLoaiCongViec}
                      </option>
                    ))}
                  </select>

                  <select
                    
                    class="form-select w-50"
                    aria-label="Default"
                    value={subCategory}
                    onChange={(e) => handleSubCategory(e)}
                  >
                    <option selected>SELECT A SUBCATEGORY</option>
                    {subList?.map((items) =>
                      items?.dsNhomChiTietLoai.map((items) => (
                        <option key={items.id} value={items.id}>
                          {items.tenNhom}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 pb-5">
              <div className="d-flex col-12">
                <div className="d-flex flex-column col-3 pe-4" >
                  <p className="jobDetail-gig">Gig metadata</p>
                  <p>
                    As your Gig storefront, your title is the most important
                    place to include keywords that buyers would likely use to
                    search for a service like yours.
                  </p>
                </div>
                <div className="pb-4 d-flex justify-content-end align-items-baseline col-9 ps-4">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Name"
                    {...register("danhGia", {
                      required: {
                        value: true,
                        message: "Tên công việc không được để trống",
                      },
                      minLength: {
                        value: 5,
                        message: "Tên công việc phải từ 5 đến 20 ký tự",
                      },
                      maxLength: {
                        value: 80,
                        message: "Tên công việc phải từ 5 đến 80 ký tự",
                      },
                    })}
                  />
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
                <div className="pb-4 col-9 ps-4 d-flex justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Price"
                    {...register("giaTien", {
                      required: {
                        value: true,
                        message: "Tên công việc không được để trống",
                      }
                    })}
                  />
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
                    className="form-control w-100"
                    type="text"
                    placeholder="Descrice"
                    {...register("moTa", {
                      required: {
                        value: true,
                        message: "",
                      }
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
                    className="form-control w-100"
                    type="text"
                    placeholder="Sort Descrice"
                    {...register("moTaNgan", {
                      required: {
                        value: true,
                        message: "",
                      }
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

export default CreateJob;
