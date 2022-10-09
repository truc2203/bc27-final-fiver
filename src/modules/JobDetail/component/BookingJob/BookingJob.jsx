import React from "react";
import { useState } from "react";
import {BsFillClockFill} from 'react-icons/bs'
import {BiRevision} from 'react-icons/bi'
import {FcCheckmark,FcDebian} from 'react-icons/fc'
import jobAPI from "../../../../apis/jobAPI";
import { notification } from "antd";
const BookingJob = ({jobId}) => {

  const user = JSON.parse(localStorage.getItem("user")) || {};  


  //get current date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [side1, setSide1] = useState("block");
  const [side2, setSide2] = useState("none");
  const [side3, setSide3] = useState("none");

  const handleSide = (value) => {
    if (value === "side-basic") {
      setSide1("block");
      setSide2("none");
      setSide3("none");
    } else if (value === "side-standard") {
      setSide2("block");
      setSide1("none");
      setSide3("none");
    } else if (value === "side-premium") {
      setSide3("block");
      setSide2("none");
      setSide1("none");
    }
  };

  const value = {
    id : 1,
    maCongViec : Number(jobId),
    maNguoiThue : user.user?.id || '',
    ngayThue : date,
    hoanThanh : false
  }

  const handleBooking = async (value) => {
      if(user.user?.id === undefined)
      {
        notification.warning({
          message : 'Bạn cần đăng nhập để đặt công việc này !'
        })
      }
      try {
        await jobAPI.bookingJob(value)
        notification.success({
          message:'Đặt công việc thành công, vui lòng đợi người tạo xác nhận !'
        })
      } catch (error) {
        notification.error({
          message : 'Đặt công việc thất bại !',
          description:error
        })
      }
  }
  if(!user) {
    return
  }
  return (
    <div>
      <div className="d-flex sidebar-hd">
        <button
          onClick={() => handleSide("side-basic")}
          className="sidebar-btn col-4 border"
        >
          Basic
        </button>
        <button
          onClick={() => handleSide("side-standard")}
          className="sidebar-btn col-4 border"
        >
          Standard
        </button>
        <button
          onClick={() => handleSide("side-premium")}
          className="sidebar-btn col-4 border"
        >
          Premium
        </button>
      </div>
      <div className="sidebar-content position-relative ">
        <div
          style={{ display: `${side1}` }}
          className="side-item p-4 position-absolute border"
        >
            <div className="d-flex flex-column pb-4">
                <p className="side-price">$100</p>
                <p className="side-discount">Save up to 15% with Subscribe to Save</p>
            </div>
            <div className="side-discount pb-5">
            BASIC Basic Static Native Android and iPhone mobile app development for 4 - 5 screens
            </div>
            <div className="d-flex pb-3">
                <div className="d-flex align-items-center side-discount pe-3">
                    <p className="pe-2"><BsFillClockFill/></p>
                    <p>5 Days Delivery</p>
                </div>
                <div className="d-flex align-items-center side-discount">
                    <p className="pe-2"><BiRevision/></p>
                    <p>3 Revisions</p>
                </div>
            </div>
            <ul className="d-flex flex-column side-feature pb-3">
                    <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Functional app</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>2 operating systems</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>App submission</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>App icon</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Splash screen</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcDebian/></p>
                        <p>Ad network integration</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcDebian/></p>
                        <p>Source code</p>
                    </li>
                </ul>
                <button onClick={() => handleBooking(value)} className="side-btn">Continue</button>
                <button className="side-btn-sub">Compare Packages</button>
        </div>
        <div
          style={{ display: `${side2}` }}
          className="side-item p-4 position-absolute border"
        >
             <div className="d-flex flex-column pb-4">
                <p className="side-price">$500</p>
                <p className="side-discount">Save up to 15% with Subscribe to Save</p>
            </div>
            <div className="side-discount pb-5">
            STANDARD Average level a server based android and iPhone app with 4-5 screens with your given UI
            </div>
            <div className="d-flex pb-3">
                <div className="d-flex align-items-center side-discount pe-3">
                    <p className="pe-2"><BsFillClockFill/></p>
                    <p>10 Days Delivery</p>
                </div>
                <div className="d-flex align-items-center side-discount">
                    <p className="pe-2"><BiRevision/></p>
                    <p>5 Revisions</p>
                </div>
            </div>
            <ul className="d-flex flex-column side-feature pb-3">
            <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Functional app</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>2 operating systems</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>App submission</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>App icon</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Splash screen</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcDebian/></p>
                        <p>Ad network integration</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Source code</p>
                    </li>
                </ul>
                <button onClick={() => handleBooking(value)} className="side-btn">Continue</button>
                <button className="side-btn-sub">Compare Packages</button>
        </div>
        <div
          style={{ display: `${side3}` }}
          className="side-item p-4 position-absolute border"
        >
             <div className="d-flex flex-column pb-4">
                <p className="side-price">$900</p>
                <p className="side-discount">Save up to 15% with Subscribe to Save</p>
            </div>
            <div className="side-discount pb-5">
            PREMIUM A complete product developed as per requirements using Database, Payment SDKs
            </div>
            <div className="d-flex pb-3">
                <div className="d-flex align-items-center side-discount pe-3">
                    <p className="pe-2"><BsFillClockFill/></p>
                    <p>21 Days Delivery</p>
                </div>
                <div className="d-flex align-items-center side-discount">
                    <p className="pe-2"><BiRevision/></p>
                    <p>Unlimited Revisions</p>
                </div>
            </div>
            <ul className="d-flex flex-column side-feature pb-3">
            <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Functional app</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>2 operating systems</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>App submission</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>App icon</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Splash screen</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Ad network integration</p>
                    </li> <li className="d-flex pb-2">
                        <p className='pe-2'><FcCheckmark/></p>
                        <p>Source code</p>
                    </li>
                </ul>
                <button onClick={() => handleBooking(value)} className="side-btn">Continue</button>
                <button className="side-btn-sub">Compare Packages</button>
        </div>
      </div>
    </div>
  );
};

export default BookingJob;
