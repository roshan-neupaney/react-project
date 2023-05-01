import React from 'react'
import { Link } from 'react-router-dom';


export default function Copyright() {
  return (
    <>
    <footer>
        <div className="footerContainer">
          <div className="sectionContainer">
            <div className="section">
              <p className='Section-para'>&copy; Let's Shop. All Rights Reserved
              </p>
            </div>
            <div className="section">
              <Link className='links'><p className='Section-para'>Privacy Policy</p></Link>
              <Link className='links'><p className='Section-para'>Terms and Conditions</p></Link>
              
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}
