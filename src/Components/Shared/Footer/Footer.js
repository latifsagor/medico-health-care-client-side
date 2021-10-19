import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center">
            <h2>Medico Health Care</h2>
          </div>
          <div className="col-lg-4 text-center">
            <h4>About Us</h4>
            <p>
              In 1950, Merle and Jean Marx started Medical Service Company (MSC)
              in a small office in Cleveland, OH as a Pharmacy and Medical
              Equipment Supplier.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <h4>Address</h4>
            <p>
              228/1, Shantiniketon, <br /> Tejgaon, Dhaka-1208.
            </p>
          </div>
        </div>
        <div className="pt-5 text-muted text-center">
          <h6>All rights of reserved by Medico Health Care</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
