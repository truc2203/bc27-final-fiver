import useRequest from "../../../hook/useRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FileOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import userAPI from "../../../apis/userAPI";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const addUser = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      password: "",
      email: "",
      phone: "",
      birthday: "",
      skill: "",
    },
    mode: "onTouched",
  });
  const navigate = useNavigate();
  const movePath = (path) => {
    navigate(path);
  };
  const { data: handleAddUser, isLoading } = useRequest(
    (values) => userAPI.addUser(values),
    { isManual: true }
  );
  const onSubmit = async (values) => {
    try {
      await handleAddUser(values);
      notification.success({
        message: "Thêm user thành công",
      });
    //   movePath("../User.jsx");
    } catch (error) {
      notification.error({
        message: "Thêm user thất bại",
        description: error,
      });
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <div className="d-flex justify-content-between">
              <h5 className="text-dark mb-3">Thêm người dùng mới</h5>
              <button
                // onClick={() => movePath("../User.jsx")}
                className="btn-style"
              >
                <BsFillArrowLeftCircleFill /> Quản Lý người dùng
              </button>
            </div>
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
                <div className="col-6">
                  <div className="pb-5">
                    <span>Name : </span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name không được để trống",
                        },
                        minLength: {
                          value: 5,
                          message: "Name phải từ 5 đến 20 ký tự",
                        },
                        maxLength: {
                          value: 20,
                          message: "Name phải từ 5 đến 20 ký tự",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-5">
                    <span>Password : </span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Password"
                      {...register("Password", {
                        required: {
                          value: true,
                          message: "Mật khẩu không được để trống",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-5">
                    <span>Email : </span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="email"
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
                <div className="col-6">
                  <div className="pb-5">
                    <span>Số Điện Thoại</span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="Số điện thoại"
                      {...register("soDt", {
                        required: {
                          value: true,
                          message: "Số Điện Thoại không được để trống",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-5 ">
                    <span>birthday : </span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="birthday"
                      {...register("birthday", {
                        required: {
                          value: true,
                          message: "birthday không được để trống",
                        },
                      })}
                    />
                  </div>
                  <div className="pb-5 ">
                    <span>skill : </span>
                    <input
                      className="form-control w-75"
                      type="text"
                      placeholder="skill"
                      {...register("skill", {
                        required: {
                          value: true,
                          message: "skill không được để trống",
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-success">Thêm user</button>
            </form>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default addUser;
