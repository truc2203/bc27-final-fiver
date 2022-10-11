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
    if (value === "booking-basic") {
      setSide1("block");
      setSide2("none");
      setSide3("none");
    } else if (value === "booking-standard") {
      setSide2("block");
      setSide1("none");
      setSide3("none");
    } else if (value === "booking-premium") {
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
    <div className="w-100">
      <div className="d-flex bookingJob-heading">
        <button
          onClick={() => handleSide("booking-basic")}
          className="bookingJob-btn col-4 border"
        >
          Basic
        </button>
        <button
          onClick={() => handleSide("booking-standard")}
          className="bookingJob-btn col-4 border"
        >
          Standard
        </button>
        <button
          onClick={() => handleSide("booking-premium")}
          className="bookingJob-btn col-4 border"
        >
          Premium
        </button>
      </div>
      <div className="bookingJob-content position-relative ">
        <div
          style={{ display: `${side1}` }}
          className="bookingJob-content-item p-4 position-absolute border"
        >
            <div className="d-flex flex-column pb-4">
                <p className="bookingJob-content-price">$100</p>
                <p className="bookingJob-content-discount">Save up to 15% with Subscribe to Save</p>
            </div>
            <div className="bookingJob-content-discount pb-5">
            BASIC Basic Static Native Android and iPhone mobile app development for 4 - 5 screens
            </div>
            <div className="d-flex pb-3">
                <div className="d-flex align-items-center bookingJob-content-discount pe-3">
                    <p className="pe-2"><BsFillClockFill/></p>
                    <p>5 Days Delivery</p>
                </div>
                <div className="d-flex align-items-center bookingJob-content-discount">
                    <p className="pe-2"><BiRevision/></p>
                    <p>3 Revisions</p>
                </div>
            </div>
            <ul className="d-flex flex-column bookingJob-content-feature pb-3">
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
                <button onClick={() => handleBooking(value)} style={{borderRadius:'4px'}} className="sliderSearch-btn w-100">Continue</button>
                <button className="bookingJob-btn-sub">Compare Packages</button>
        </div>
        <div
          style={{ display: `${side2}` }}
          className="bookingJob-content-item p-4 position-absolute border"
        >
             <div className="d-flex flex-column pb-4">
                <p className="bookingJob-content-price">$500</p>
                <p className="bookingJob-content-discount">Save up to 15% with Subscribe to Save</p>
            </div>
            <div className="bookingJob-content-discount pb-5">
            STANDARD Average level a server based android and iPhone app with 4-5 screens with your given UI
            </div>
            <div className="d-flex pb-3">
                <div className="d-flex align-items-center bookingJob-content-discount pe-3">
                    <p className="pe-2"><BsFillClockFill/></p>
                    <p>10 Days Delivery</p>
                </div>
                <div className="d-flex align-items-center bookingJob-content-discount">
                    <p className="pe-2"><BiRevision/></p>
                    <p>5 Revisions</p>
                </div>
            </div>
            <ul className="d-flex flex-column bookingJob-content-feature pb-3">
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
                <button onClick={() => handleBooking(value)} style={{borderRadius:'4px'}} className="sliderSearch-btn w-100">Continue</button>
                <button className="bookingJob-btn-sub">Compare Packages</button>
        </div>
        <div
          style={{ display: `${side3}` }}
          className="bookingJob-content-item p-4 position-absolute border"
        >
             <div className="d-flex flex-column pb-4">
                <p className="bookingJob-content-price">$900</p>
                <p className="bookingJob-content-discount">Save up to 15% with Subscribe to Save</p>
            </div>
            <div className="bookingJob-content-discount pb-5">
            PREMIUM A complete product developed as per requirements using Database, Payment SDKs
            </div>
            <div className="d-flex pb-3">
                <div className="d-flex align-items-center bookingJob-content-discount pe-3">
                    <p className="pe-2"><BsFillClockFill/></p>
                    <p>21 Days Delivery</p>
                </div>
                <div className="d-flex align-items-center bookingJob-content-discount">
                    <p className="pe-2"><BiRevision/></p>
                    <p>Unlimited Revisions</p>
                </div>
            </div>
            <ul className="d-flex flex-column bookingJob-content-feature pb-3">
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
                <button onClick={() => handleBooking(value)} style={{borderRadius:'4px'}} className="sliderSearch-btn w-100">Continue</button>
                <button className="bookingJob-btn-sub">Compare Packages</button>
        </div>
      </div>
    </div>
  );
};

export default BookingJob;
