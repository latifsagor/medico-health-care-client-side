import React from 'react'
import './Banner.css'
import doctor from '../../images/slider_doctor.png'
import { Button } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className="banner-img">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="text-start col-6 text-light">
            <h2>Medico Hospital</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              nostrum! Nostrum vero ut qui assumenda natus culpa iure impedit
              quae doloremque consectetur molestias maxime fugit autem,
              quibusdam unde eveniet. Est!
            </p>
            <Button>More Details</Button>
          </div>
          <div className="col-6 doctor-column">
            <img className="doctor" src={doctor} alt="Doctor" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
