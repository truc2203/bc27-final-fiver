import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {

  return (
    <div className='d-block slider-main'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Slider