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
    if (user === null) {
      notification.warning({
        message: "Tài khoản của bạn không có quyền quản trị để truy cập trang này !",
      });
      movePath("/");
    }
  }, []);

  return (
    <div className="m-container">
      <div className="py-5">
        <div className="d-flex justify-content-center create-box">
          <form className="border p-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center col-12 pb-5">
              <div className="d-flex col-12 flex-column flex-sm-row">
                <div className="d-flex flex-column col-3 pb-3 pb-sm-0 pe-4">
                  <p className="jobDetail-gig">Gig Title</p>
                  <p className="create-subText">
                    As your Gig storefront, your title is the most important
                    place to include keywords that buyers would likely use to
                    search for a service like yours.
                  </p>
                </div>
                <div className="pb-0 pb-sm-4 d-flex flex-column justify-content-end align-items-baseline col-12 col-sm-9 ps-0 ps-sm-4">
                  <input
                    style={{ height: "80px" }}
                    className="form-control w-100"
                    type="text"
                    placeholder="I will do something I'm really good at"
                    {...register("tenCongViec", {
                      required: {
                        value: true,
                        message: "Tiêu đề không được để trống",
                      },
                      minLength: {
                        value: 5,
                        message: "Tiêu đề phải từ 5 - 80 ký tự",
                      },
                      maxLength: {
                        value: 80,
                        message: "Tiêu đề phải từ 5 - 80 ký tự",
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
              <div className="d-flex col-12 flex-column flex-sm-row">
                <div className="d-flex flex-column col-3 pb-3 pb-sm-0 pe-4">
                  <p className="jobDetail-gig">Category</p>
                  <p className="create-subText">
                    Choose the category and sub-category most suitable for your
                    Gig.
                  </p>
                </div>
                <div className="pb-0 pb-sm-4 d-flex justify-content-end align-items-baseline col-12 col-sm-9 ps-0 ps-sm-4">
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
              <div className="d-flex col-12 flex-column flex-sm-row">
                <div className="d-flex col-3 pb-3 pb-sm-0 pe-4  flex-column">
                  <p className="jobDetail-gig">Price</p>
                  <p className="create-subText">
                    Enter search terms you feel your buyers will use when
                    looking for your service.
                  </p>
                </div>
                <div className="pb-0 pb-sm-4 col-12 col-sm-9 ps-0 ps-sm-4 d-flex flex-column justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Price"
                    {...register("giaTien", {
                      required: {
                        value: true,
                        message: "Giá tiền không được để trống",
                      },
                      pattern: {
                        value:
                        /[0-9]/,
                        message: "Giá tiền phải là ký tự số",
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
              <div className="d-flex col-12 flex-column flex-sm-row">
                <div className="d-flex col-3 pb-3 pb-sm-0 pe-4  flex-column">
                  <p className="jobDetail-gig">Descrice</p>
                  <p className="create-subText">
                    Enter search terms you feel your buyers will use when
                    looking for your service.
                  </p>
                </div>
                <div className="pb-0 pb-sm-4 col-12 col-sm-9 ps-0 ps-sm-4 d-flex flex-column justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Descrice"
                    {...register("moTa", {
                      required: {
                        value: true,
                        message: "",
                      },
                      minLength: {
                        value: 10,
                        message: "Mô tả phải có ít nhất 10 ký tự ! Hãy viết gì đó",
                      },
                    })}
                  />
                  {errors.moTa && (
                        <p className="pb-3" style={{ color: "red" }}>
                          {errors.moTa.message}
                        </p>)}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-12 mb-4">
              <div className="d-flex col-12 flex-column flex-sm-row">
                <div className="d-flex col-3 pb-3 pb-sm-0  flex-column">
                  <p className="jobDetail-gig">Sort Descrice</p>
                  <p className="create-subText">
                    Enter search terms you feel your buyers will use when
                    looking for your service.
                  </p>
                </div>
                <div className="pb-0 pb-sm-4 col-12 col-sm-9 ps-0 ps-sm-4 d-flex flex-column justify-content-end align-items-baseline">
                  <input
                    className="form-control w-100"
                    type="text"
                    placeholder="Sort Descrice"
                    {...register("moTaNgan", {
                      required: {
                        value: true,
                        message: "",
                      },
                      minLength: {
                        value: 10,
                        message: "Mô tả phải có ít nhất 10 ký tự ! Hãy viết gì đó",
                      },
                    })}
                  />
                   {errors.moTaNgan && (
                        <p className="pb-3" style={{ color: "red" }}>
                          {errors.moTaNgan.message}
                        </p>)}
                </div>
              </div>
            </div>
            <div className="text-center pb-4">
              <button className="header-nav-btn">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
