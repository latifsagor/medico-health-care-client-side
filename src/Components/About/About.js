import React from 'react'
import './About.css'
import photo1 from '../images/about.jpg'

const About = () => {
  return (
    <div>
      <div className="about-sec-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-white text-uppercase">About Us</h2>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid" src={photo1} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h3>Medico Hospital</h3>
            <p>
              In 1950, Merle and Jean Marx started Medico Hospital Ltd. (MHL) in
              a small office in Cleveland, OH as a Pharmacy and Medical
              Equipment Supplier. Since then, we have grown our size, focus and
              impact. We now have hundreds of dedicated team members that care
              for thousands of patients in cities and states across the Midwest
              and Northeast.
            </p>
            <p>
              In our 70+ years of providing home medical equipment and supplies,
              we’ve established ourselves as a company that cares. We have
              survived and thrived by providing the optimal equipment, service
              and care, delivered with compassion and integrity.
            </p>
            <p>
              Today, Medical Service Company is a Post-Acute Healthcare Provider
              that specializes in Chronic-Respiratory Disease Management. This
              is done through Training and Education, Clinical Pathways and
              Patient Engagement. As a proud third-generation family owned and
              operated business, MSC has a strong pledge to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
