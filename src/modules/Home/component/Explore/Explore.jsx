import React from 'react'
import {FcEngineering,FcBearish,FcDocument,FcVideoCall,FcMusic,FcMindMap,FcDebt,FcSportsMode,FcDatabase} from 'react-icons/fc'
const Explore = () => {
  return (
    <div className='py-5'>
        <div className="m-container my-5">
            <p className='ca-hd mb-5 pb-4'>Explore the marketplace</p>
            <ul className='d-flex flex-wrap'>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcEngineering size='48px'/>
                        <span className='ex-title mt-2'>Graphics & Desgin</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcBearish size='48px'/>
                        <span className='ex-title mt-2'>Digital Marketing</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcDocument size='48px'/>
                        <span className='ex-title mt-2'>Writing & Translation</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcVideoCall size='48px'/>
                        <span className='ex-title mt-2'>Video & Animation</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcMusic size='48px'/>
                        <span className='ex-title mt-2'>Music & Audio</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcMindMap size='48px'/>
                        <span className='ex-title mt-2'>Programming & Tech</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcDebt size='48px'/>
                        <span className='ex-title mt-2'>Bussiness</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcSportsMode size='48px'/>
                        <span className='ex-title mt-2'>Lifestyle</span>
                    </a>
                </li>
                <li className='ex-w'>
                    <a className='ex-item pb-5 mb-4' href>
                        <FcDatabase size='48px'/>
                        <span className='ex-title mt-2'>Data</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Explore