import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import UserHello from "../../UserAdmin/UserHello";
import { AiOutlineEdit, AiOutlineDelete ,AiOutlineFileImage} from "react-icons/ai";
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
  // Modal Ant
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Deleting a job type will also delete all the jobs inside"
  );
  const showModal = () => {
    setOpen(true);
  };

  const handleDeletSubTypeJob = async (id, name) => {
    try {
      await jobAPI.deleteSubTypeJob(id);
      notification.success({
        message: `Delete ${name} Successful!`,
      });
      setIsDelete(!isDelete);
      setModalText("Deleting a job type will also delete all the jobs inside");
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 500);
    } catch (error) {
      notification.error({
        message: "Delete is failed!",
      });
    }
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  /////
  const { id } = useParams();

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);


  const [isAdd, setIsAdd] = useState(false);

  const [isDelete, setIsDelete] = useState(false);

  const [isOpen,setIsOpen] = useState(false)

  const [valueType,setvalueType] = useState("")

  const { data: subType } = useRequest(
    async () => await jobAPI.getSubTypeJob(id),
    { deps: [isAdd, isDelete] }
  );

  const newSubType = subType ? subType[0] : {};

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
            onClick={() => move(record,'/jobs/typejob/editsubtype/')}
            className="user-action px-2"
          >
            <AiOutlineEdit />
          </button>
          <button
            onClick={() => move(record,`/jobs/typejob/avatar/`)}
            className="user-action px-2"
          >
            <AiOutlineFileImage />
          </button>
          <button onClick={() => showModal()} className="user-action ">
            <AiOutlineDelete />
          </button>

          <Modal
            title="Warning"
            open={open}
            onOk={() => handleDeletSubTypeJob(record.id, record.tenNhom)}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
        </div>
      ),
    },
  ];

  const movePath = (path) => {
    navigate(path);
  };

  const newTypeName = {
    id:0,
    tenLoaiCongViec : valueType
  }

  const handleRenameType =async (id,newTypeName) => {
      try {
          await jobAPI.renameTypeJob(id,newTypeName)
          setIsOpen(!isOpen)
          setIsAdd(!isAdd)
          notification.success({
            message:'Đổi tên thành công!'
          })
      } catch (error) {
        notification.error({
          message:'Đổi tên thất bại!',
          description:error
        })
      }
  }

  const move = (value,path) => {
    dispatch({type:'editSubTypeJob',value})
    movePath(`${path}${value.id}`)
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
            <div className="d-flex fs-4 text-dark col-12 pb-3 align-items-baseline">
              <p className="me-3">{newSubType.tenLoaiCongViec}</p>
              <button onClick={() => setIsOpen(!isOpen) }>
                <AiOutlineEdit />
              </button>
              <div style={{display : isOpen ? 'flex' : 'none'}} class="input-group mb-3 ms-3 w-25">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Input a new name"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(e) => setvalueType(e.target.value)}
                />
                <button
                onClick={() => handleRenameType(id,newTypeName)}
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Confirm
                </button>
              </div>
            </div>
            <div className="d-flex">
             
              <button
                onClick={() => movePath(`/jobs/typejob/addsubtype/${id}`)}
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
              dataSource={newSubType.dsNhomChiTietLoai}
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
