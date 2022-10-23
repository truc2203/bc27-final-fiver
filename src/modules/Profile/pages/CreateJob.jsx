import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {  notification } from "antd";
import { useNavigate } from "react-router-dom";
import jobAPI from "../../../apis/jobAPI";
import useRequest from "../../../hook/useRequest";

const CreateJob = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [category, setCategory] = useState(0);

  const [subCategory, setSubCategory] = useState(0);

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const { data: list } = useRequest(() => jobAPI.getTypeJob());

  const { data: subList } = useRequest(() => jobAPI.getTypeJobById(category), {
    deps: [category],
  });

  const {data:handleAddJob} = useRequest((value) => jobAPI.addJob(value),{ isManual: true })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: 0,
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
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

  const handleSubCategory = (e) => {
    setSubCategory(e.target.value);
    setValue("maChiTietLoaiCongViec", subCategory);
    console.log(subCategory);
  };

  const onSubmit = async (value) => {
    try {
      await handleAddJob(value);
      notification.success({
        message: "Thêm công việc mới thành công!",
      });
      movePath(`../profile/${user.user.id}`);
    } catch (error) {
      notification.error({
        message: "Thêm công việc mới thất bại!",
        description: error,
      });
    }
  };

  useEffect(() => {
    if (user === null || user.user.role !== "ADMIN" ) {
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
                        </p>)}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center col-12 pb-5">
              <div className="d-flex col-12">
                <div className="d-flex flex-column col-3 pe-4">
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
                    placeholder="Price"
                    {...register("giaTien", {
                      required: {
                        value: true,
                        message: "Price must be a number",
                      },
                      
                    })}
                  />
                  {errors.giaTien && (
                        <p className="pb-3" style={{ color: "red" }}>
                          {errors.giaTien.message}
                        </p>)}
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

export default CreateJob;
