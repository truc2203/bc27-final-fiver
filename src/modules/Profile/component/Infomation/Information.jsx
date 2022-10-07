import React from "react";
import useRequest from "../../../../hook/useRequest";
import userAPI from "../../../../apis/userAPI";
import { HiUser } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { BsFacebook, BsGoogle, BsTwitter, BsGithub } from "react-icons/bs";
import {BiEditAlt,BiTrash} from 'react-icons/bi'
import { useState } from "react";
const Information = () => {

  const [valueSkill,setValueSkill] = useState(false)

  const [valueCer,setValueCer] = useState(false)

  const {data : user} = useRequest(() => userAPI.getUser(47),{deps:[valueSkill,valueCer]})



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
    avatar : user?.avatar
  }


  const handleDeleteSkill = (value) => {
    const newSkillArr = user.skill.filter(skill => skill !== value)
    const newValue = {...defaultValue,skill:newSkillArr}
    userAPI.editUser(newValue,user.id)
    setValueSkill(!valueSkill)
  }
  const handleDeleteCer = (value) => {
    const newCerArr = user.certification.filter(cer => cer !== value)
    const newValue = {...defaultValue,certification:newCerArr}
    userAPI.editUser(newValue,user.id)
    setValueCer(!valueCer)
  }

  const handleAddSkill = (value) => {
    user.skill.push(value)
    console.log(user.skill);
    const newValue = {...defaultValue,skill:user.skill}
    userAPI.editUser(newValue,user.id)
  }

  const handleAddCer = (value) => {
    user.certification.push(value)
    console.log(user.skill);
    const newValue = {...defaultValue,certification:user.certification}
    userAPI.editUser(newValue,user.id)
  }


  return (
    <div>
      <div
        className="d-flex p-4 flex-column rounded-1 border mb-4"
        style={{ background: "#ffffff" }}
      >
        <div className="profile-user-info pb-4">
          <div className="profile-user-img">
            <img className="profile-user-pic" src={user?.avatar} alt="" />
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
            <p onClick={() => handleAddSkill('ADD')} className="profile-add-skill">Add New</p>
          </div>
          <div className="profile-user-text">
            {user?.skill.map((skill) => (
              <div className="d-flex justify-content-between pb-4">
                <p>{skill}</p>
                <div className="d-flex">
                    <button  className="profile-skill-edit"><BiEditAlt/></button>
                    <button onClick={() => handleDeleteSkill(skill)} className="profile-skill-del ps-2"><BiTrash/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-user-linked d-flex flex-column ">
          <div className="profile-user-label d-flex justify-content-between">
            <p className="pb-3">Certifications</p>
            <p onClick={() => handleAddCer("Cer")} className="profile-add-skill">Add New</p>
          </div>
          <div className="profile-user-text">
            {user?.certification.map((certification) => (
              <div className="d-flex justify-content-between pb-4">
              <p>{certification}</p>
              <div className="d-flex">
                  <button className="profile-skill-edit"><BiEditAlt/></button>
                  <button onClick={() => handleDeleteCer(certification)} className="profile-skill-del ps-2"><BiTrash/></button>
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
