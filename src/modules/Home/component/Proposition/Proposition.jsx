import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
const Proposition = () => {
  return (
    <div className='py-5' style={{background:'#f1fdf7'}}>
        <div className='m-container my-xl-5 my-0'>
            <div className="d-flex align-items-center proposition">
                <div className="col-xl-6 col-12 pr-right">
                    <p className='ca-hd pb-4'>A whole world of freelance talent at your fingertips</p>
                    <div className='d-flex pr-title align-items-center pb-2'>
                        <span className='pe-2'><BsCheckCircle/></span> The best for every budget
                    </div>
                    <p className='pr-content pb-4'>
                    Find high-quality services at every price point. No hourly rates, just project-based pricing
                    </p>
                    <div className='d-flex pr-title align-items-center pb-2'>
                        <span className='pe-2'><BsCheckCircle/></span> Quality work done quickly
                    </div>
                    <p className='pr-content pb-4'>
                    Find the right freelancer to begin working on your project within minutes.
                    </p>
                    <div className='d-flex pr-title align-items-center pb-2'>
                        <span className='pe-2'><BsCheckCircle/></span> Protected payments, every time
                    </div>
                    <p className='pr-content pb-4'>
                    Always know what you'll pay upfront. Your payment isn't released until you approve the work.
                    </p>
                    <div className='d-flex pr-title align-items-center pb-2'>
                        <span className='pe-2'><BsCheckCircle/></span> 24/7 support
                    </div>
                    <p className='pr-content pb-4'>
                    Questions? Our round-the-clock support team is available to help anytime, anywhere.
                    </p>
                </div>
                <div className="col-xl-6 col-12">
                    <div className="modal-video">
                        <img className='pro-img' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="" loading='auto' />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proposition