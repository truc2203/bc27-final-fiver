import React, { useState, useEffect } from "react";
import authAPI from "../../../apis/authAPI";
import useRequest from "../../../hook/useRequest";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";

import { Outlet, useNavigate } from "react-router-dom";
import UserHello from "../UserHello";

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
    <NavLink to="../jobs">Jobs Manage</NavLink>,
    "sub2",
    <VideoCameraOutlined />
  ),
];

const AddUser = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      birthday: "",
      gender: "",
      role: "",
      skill: [],
      certification: [],
    },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    try {
      const skillArr = values.skill.split(", ");
      const cerArr = values.certification.split(", ");

      const newValues = { ...values, skill: skillArr, certification: cerArr };

      await authAPI.register(newValues);
      notification.success({
        message: "Add User Successful!",
      });
      movePath("../user");
    } catch (error) {
      notification.error({
        message: "Add User Failed!",
        description: error,
      });
    }
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
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb>
            <h4
              className="text-dark mb-3 col-12"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              Add User
            </h4>
            <div className="d-flex "></div>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex">
                <div className="col-6 m-2">
                  <div className="pb-5">
                    <span>Email :</span>

                    <input
                      className="form-control w-75"
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

                  <div className="pb-5">
                    <span>Phone</span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Phone"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Mật khẩu không được để trống",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-5">
                    <span>Birdthday</span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Birthday"
                      {...register("birthday", {
                        required: {
                          value: true,
                          message: "Số Điện Thoại không được để trống",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="col-6 m-2">
                  <div className="pb-5">
                    <span>Gender</span>
                    <select
                      className="form-control w-75"
                      type="text"
                      placeholder="Gender"
                      {...register("gender")}
                    >
                      <option value="true">Male</option>
                      <option value="false">Female</option>
                    </select>
                  </div>
                  <div className="pb-5">
                    <span>Role</span>
                    <select
                      className="form-control w-75"
                      type="text"
                      placeholder="Role"
                      {...register("role")}
                    >
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  </div>
                  <div className="pb-5 ">
                    <span>Skill</span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Skill"
                      {...register("skill", {
                        required: {
                          value: true,
                          message: "Họ tên không được để trống",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-5 ">
                    <span>Certification</span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Certification"
                      {...register("certification", {
                        required: {
                          value: true,
                          message: "Họ tên không được để trống",
                        },
                      })}
                    />
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

export default AddUser;
