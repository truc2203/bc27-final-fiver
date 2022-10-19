import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Select } from "antd";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { useNavigate } from "react-router-dom";
import UserHello from "../../UserAdmin/UserHello";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "antd";
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

const EditTypeJob = () => {

  const {id} = useParams()

  // const {data:subType} = useRequest(() => jobAPI.getSubTypeJob(id))
  const [collapsed, setCollapsed] = useState(false);

  const [valueSub, setValueSub] = useState("");

  const [isAdd,setIsAdd] = useState(false)


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },

    {
      title: "Sub Type",
      dataIndex: "tenNhom",
    },
    {
      title: "Avatar",
      dataIndex: "",
      key: "i",
      render: (record) => (
        <img
          style={{ width: "48px", height: "48px" }}
          src={record.hinhAnh}
          alt=""
        />
      ),
    },
    {
      title: "Jobs",
      dataIndex: "",
      key: "y",
      render: (record) => (
        <>
          {record.dsChiTietLoai.map((jobs) => (
            <p key={jobs.id} className="d-flex align-items-baseline">
              {jobs.tenChiTiet}{" "}
              <button className="d-flex align-items-center ps-3 user-action">
                <CloseOutlined />
              </button>
            </p>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <div>
          <button
            // onClick={() => moveEditTypeJob(record)}
            className="user-action px-2"
          >
            <AiOutlineEdit />
          </button>
          <button
            // onClick={() => handleDeletTypeJob(record.id)}
            className="user-action "
          >
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const { typeJobDedail } = useSelector((state) => state.jobManage);

  const defaultType = {
    id:0,
    tenChiTiet:valueSub,
    maLoaiCongViec:Number(id),
    danhSachChiTiet:[

    ]
  }

  const handleAddSubType = async (value) => {
    const index = typeJobDedail.dsNhomChiTietLoai.findIndex(
      (i) => i.tenNhom === value.tenChiTiet
    );
    if (!value.tenChiTiet) {
      notification.warning({
        message: `Type is required !`,
      });
    } else {
      if (index === -1) {
        try {
          await jobAPI.addSubTypeJob(value);
          notification.success({
            message: `Add Sub Type Successful!`,
          });
          setIsAdd(!isAdd);
        } catch (error) {
          notification.error({
            message: "Add Sub Type Failed!",
            description: error,
          });
        }
      } else {
        notification.error({
          message: `Sub Type is already exist !`,
        });
      }
    }
  }

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
              Jobs Managerment / Edit Type Job
            </h4>
            <div className="d-flex fs-4 text-dark col-12 pb-3">
              {typeJobDedail.tenLoaiCongViec}
            </div>
            <div className="d-flex">
              <form className="col-8">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Input a new sub type"
                    style={{
                      display: "inline-block",
                      width: "100%",
                      borderRadius: "4px",
                    }}
                    className="form-control"
                    onChange={(e) => setValueSub(e.target.value)}
                  />
                </div>
              </form>
              <button
                onClick={() => handleAddSubType(defaultType)}
                className="col-4 header-nav-btn mb-3 me-4"
                style={{ width: "160px" }}
              >
                Add New Type
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
            {/* Content */}

            <Table
              className="mt-5"
              columns={columns}
              dataSource={typeJobDedail.dsNhomChiTietLoai}
            />
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

export default EditTypeJob;
