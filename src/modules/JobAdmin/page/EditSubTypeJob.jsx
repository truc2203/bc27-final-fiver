import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { useNavigate } from "react-router-dom";
import UserHello from "../../UserAdmin/UserHello";
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

const items = [
  getItem(<NavLink to="/user">Users Manage</NavLink>, "sub1", <UserOutlined />),
  getItem(
    <NavLink to="/jobs">Jobs Manage</NavLink>,
    "sub2",
    <VideoCameraOutlined />,
    [
      getItem(
        <NavLink to="/jobs/typejob">Job Type</NavLink>,
        "sub1",
        <UnorderedListOutlined />
      ),
    ]
  ),
];

const EditSubTypeJob = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const [valueSub, setValueSub] = useState("");

  const [imgPreview, setImgPreview] = useState("");

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {},
    mode: "onTouched",
  });

  const movePath = (path) => {
    navigate(path);
  };

  const { data: listData } = useRequest(() => jobAPI.getSubTypeJobById(id));
  console.log(listData);

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

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user === null || user.user.role !== "ADMIN") {
      notification.warning({
        message: "You need to ADMIN account to access this page !",
      });
      movePath("/");
    }
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="user-logo">
          <UserHello />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, height: "64px" }}
        />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb>
            <h4
              className="text-dark mb-3 col-12"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              Jobs Managerment / Edit Sub Type Job
            </h4>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Content */}
            <form onSubmit={handleSubmit()}>
              <div className="d-flex">
                <div className="col-6 m-2">
                  <div className="pb-5">
                    <span>Name :</span>
                    <input
                      className="form-control w-75"
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
                  </div>
                  <div className="pb-4">
                    {/* <input cl5ssName="inputAddMovie w-75" type="file" placeholder="Hình Ảnh" {...register("hinhAnh")} /> */}
                    <div className="d-inline-block w-15 text-end">
                      Hình Ảnh :{" "}
                    </div>
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
                        style={{ width: "200px", height: "260px" }}
                      />
                    )}
                  </div>
                </div>
              </div>

              <button className="header-nav-btn">Cập nhật</button>
            </form>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

export default EditSubTypeJob;
