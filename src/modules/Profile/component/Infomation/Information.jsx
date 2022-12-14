import React from "react";
import useRequest from "../../../../hook/useRequest";
import userAPI from "../../../../apis/userAPI";
import { Button, Modal, notification } from "antd";
import { HiUser } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGoogle, BsTwitter, BsGithub } from "react-icons/bs";
import { BiEditAlt, BiTrash, BiImageAdd } from "react-icons/bi";
import { useState } from "react";
const Information = ({ userId }) => {
  const [valueSkill, setValueSkill] = useState(false);

  const [valueCer, setValueCer] = useState(false);

  const [isOpenSkill, setIsOpenSkill] = useState(false);

  const [isOpenCer, setIsOpenCer] = useState(false);

  const [isAvatar, setIsAvatar] = useState(false);

  const [skill, setSkill] = useState("");

  const [cer, setCer] = useState("");

  const [imgPreview, setImgPreview] = useState("");

  const { data: user } = useRequest(() => userAPI.getUserById(userId), {
    deps: [valueSkill, valueCer, isAvatar],
  });

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      hinhAnh: "",
    },
    mode: "onTouched",
  });

  const defaultValue = {
    name: user?.name,
    email: user?.email,
    password: user?.password,
    phone: user?.phone,
    birthday: user?.birthday,
    gender: user?.gender,
    role: user?.role,
    skill: user?.skill,
    certification: user?.certification,
    avatar: user?.avatar,
  };

  const handleDeleteSkill = async (value) => {
    const newSkillArr = user.skill.filter((skill) => skill !== value);
    const newValue = { ...defaultValue, skill: newSkillArr };
    await userAPI.editUser(newValue, user.id);
    setValueSkill(!valueSkill);
  };
  const handleDeleteCer = async (value) => {
    const newCerArr = user.certification.filter((cer) => cer !== value);
    const newValue = { ...defaultValue, certification: newCerArr };
    await userAPI.editUser(newValue, user.id);
    setValueCer(!valueCer);
  };

  const handleAddSkill = async (value) => {
    user.skill.push(value);
    const newValue = { ...defaultValue, skill: user.skill };
    await userAPI.editUser(newValue, user.id);
    setValueCer(!valueCer);
    setSkill("");
  };

  const handleAddCer = async (value) => {
    user.certification.push(value);
    const newValue = { ...defaultValue, certification: user.certification };
    await userAPI.editUser(newValue, user.id);
    setValueSkill(!valueSkill);
    setCer("");
  };

  const onSubmit = async (value) => {
    try {
      await userAPI.upLoadAvatar(value);
      notification.success({
        message: "C???p nh???t h??nh ???nh th??nh c??ng!",
      });
      setIsAvatar(!isAvatar);
      handleCancel();
    } catch (error) {
      notification.error({
        message: "C???p nh???t h??nh ???nh th???t b???i",
        description: error,
      });
    }
  };

  const handleChangeImage = (evt) => {
    const file = evt.target.files[0];

    if (!file) {
      return;
    }

    setValue("hinhAnh", file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      setImgPreview(evt.target.result);
    };
  };

  return (
    <div>
      <div
        className="d-flex p-4 flex-column rounded-1 border mb-4"
        style={{ background: "#ffffff" }}
      >
        <div className="profile-user-info pb-4">
          <div className="profile-user-img">
            <img
              className="profile-user-pic"
              src={
                user?.avatar
                  ? user?.avatar
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt=""
            />
            <Button type="primary" onClick={showModal}>
              <BiImageAdd />
            </Button>
            <Modal
              title="Change Avatar"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <form className="border p-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center col-12 mb-4">
                  <input
                    className="ms-1 "
                    type="file"
                    placeholder="H??nh ???nh"
                    onChange={handleChangeImage}
                  />
                  {imgPreview && (
                    <img
                      src={imgPreview}
                      alt="preview"
                      style={{ width: "240px", height: "120px" }}
                    />
                  )}
                </div>
                <div className="text-center">
                  <button className="header-nav-btn">X??c Nh???n</button>
                </div>
              </form>
            </Modal>
          </div>
          <div className="profile-user-label">
            <p>{user?.name}</p>
          </div>
        </div>
        <div className="profile-user-desc d-flex flex-column pt-3 border-top">
          <div className="profile-user-location d-flex justify-content-between pb-4">
            <p className="d-flex align-items-end">
              <span className="pe-2">
                <MdLocationOn />
              </span>{" "}
              From
            </p>
            <p>Vietnam</p>
          </div>
          <div className="profile-user-location d-flex justify-content-between">
            <p className="d-flex align-items-end">
              <span className="pe-2">
                <HiUser />
              </span>{" "}
              Member Since
            </p>
            <p>March 2022</p>
          </div>
        </div>
      </div>
      <div className="d-lfex p-4 profile-user-seller rounded-1 border flex-column">
        <div className="profile-user-linked d-flex flex-column pb-5">
          <div className="profile-user-label">
            <p className="pb-3">Linked Accounts</p>
          </div>
          <div className="profile-user-text">
            <p className="d-flex align-items-end pb-4">
              <span className="pe-2">
                <BsFacebook />
              </span>
              Facebook
            </p>
            <p className="d-flex align-items-end pb-4">
              <span className="pe-2">
                <BsGoogle />
              </span>
              Google
            </p>
            <p className="d-flex align-items-end pb-4">
              <span className="pe-2">
                <BsTwitter />
              </span>
              Twitter
            </p>
            <p className="d-flex align-items-end pb-4">
              <span className="pe-2">
                <BsGithub />
              </span>
              Github
            </p>
          </div>
        </div>
        <div className="profile-user-linked d-flex flex-column pb-5">
          <div className="profile-user-label d-flex justify-content-between">
            <p className="pb-3">Skills</p>
            <p
              onClick={() => setIsOpenSkill(true)}
              className="profile-add-skill"
              style={{
                display: isOpenSkill === "skillOpen" ? "none" : "block",
              }}
            >
              Add New
            </p>
          </div>
          <div
            style={{ display: isOpenSkill ? "flex" : "none" }}
            className="input-group flex-nowrap flex-column"
          >
            <input
              onChange={(e) => setSkill(e.target.value)}
              type="text"
              class="form-control w-100"
              placeholder="Add Skill"
            />
            <div className="d-flex py-3 justify-content-between">
              <button
                onClick={() => setIsOpenSkill(false)}
                className="header-nav-btn w-50 py-2 me-3"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddSkill(skill)}
                className="header-nav-btn w-50 py-2 ms-3"
              >
                Add
              </button>
            </div>
          </div>
          <div className="profile-user-text">
            {user?.skill?.map((skill) => (
              <div className="d-flex justify-content-between pb-3">
                <p>{skill}</p>
                <div className="d-flex">
                  
                  <button
                    onClick={() => handleDeleteSkill(skill)}
                    className="profile-skill-del ps-2"
                  >
                    <BiTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-user-linked d-flex flex-column ">
          <div className="profile-user-label d-flex justify-content-between ">
            <p className="pb-3">Certifications</p>
            <p
              onClick={() => setIsOpenCer(true)}
              className="profile-add-skill"
              style={{ display: isOpenCer ? "none" : "block" }}
            >
              Add New
            </p>
          </div>
          <div
            style={{ display: isOpenCer ? "flex" : "none" }}
            className="input-group flex-nowrap flex-column"
          >
            <input
              onChange={(e) => setCer(e.target.value)}
              type="text"
              class="form-control w-100"
              placeholder="Add Certification"
            />
            <div className="d-flex py-3 justify-content-between">
              <button
                onClick={() => setIsOpenCer(false)}
                className="header-nav-btn w-50 py-2 me-3"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddCer(cer)}
                className="header-nav-btn w-50 py-2 ms-3"
              >
                Add
              </button>
            </div>
          </div>
          <div className="profile-user-text">
            {user?.certification.map((certification) => (
              <div className="d-flex justify-content-between pb-3">
                <p>{certification}</p>
                <div className="d-flex">
                 
                  <button
                    onClick={() => handleDeleteCer(certification)}
                    className="profile-skill-del ps-2"
                  >
                    <BiTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
