import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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

const ChangeAvatarSubType = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const [imgPreview, setImgPreview] = useState("");

  const {subTypeJobInfo} = useSelector((state) => state.jobManage)
  console.log(subTypeJobInfo);
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      hinhAnh:''
    },
    mode: "onTouched",
  });

  const movePath = (path) => {
    navigate(path);
  };


  const handleChangeImage = (evt) => {
    const file = evt.target.files[0];

    if (!file) return;

    setValue("hinhAnh", file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); 
    fileReader.onload = (evt) => {

      setImgPreview(evt.target.result);
    };
  };

  const onSubmit = async (value) => {
    try {
      await jobAPI.upLoadSubTypeJob(id,value);
      movePath(`/jobs/typejob/edittype/${subTypeJobInfo.maLoaiCongviec}`)
      notification.success({
        message: "Cập nhập thành công",
      });
    } catch (error) {
      notification.error({
        message: "Cập nhật thông tin thất bại!",
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
              Jobs Managerment / Change Avatar
            </h4>
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
 
                  <div className="pb-4">
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
                        style={{ width: "320px", height: "240px" }}
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

export default ChangeAvatarSubType;
