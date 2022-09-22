import React from 'react'
import { BiSearch } from 'react-icons/bi'
const SliderSearch = () => {
  return (
    <div className='m-container'>
        <div className='d-flex'>
            <div className="col-6 sd-sr">
                <p className='sd-title pb-4'>Find the perfect freelandce services for your bussiness</p>
                <form className="d-flex pb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Try 'Buiding modile app' "
              />
              <button type="submit" className="s-btn">
                    Search
              </button>
            </form>
            <div className='d-flex text-light'>
                Polular : <ul className='d-flex'>
                    <li> <a className='sd-kw mx-2' href>Website Design</a> </li>
                    <li> <a className='sd-kw mx-2' href>Wordpress</a> </li>
                    <li> <a className='sd-kw mx-2' href>Logo Design</a> </li>
                    <li> <a className='sd-kw mx-2' href>Logo Design</a> </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SliderSearch