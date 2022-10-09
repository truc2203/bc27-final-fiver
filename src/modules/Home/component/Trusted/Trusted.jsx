import React from 'react'

const Trusted = () => {
  return (
    <div style={{background:'#fafafa', padding:'20px 0'}}>
        <div className='m-container'>
            <div className="d-flex justify-content-center align-items-center">
                <span className='trusted'>Trusted By :</span>
                <ul className='d-flex '>
                    <li className='ps-4 pe-3 pe-lg-5'>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png" alt="" />
                    </li>
                    <li className='pe-3 pe-lg-5'>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png" alt="" />
                    </li>
                    <li className='pe-3 pe-lg-5'>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png" alt="" />
                    </li>
                    <li className='pe-3 pe-lg-5'>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png" alt="" />
                    </li>
                    <li className='pe-3 pe-lg-5'>
                        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Trusted