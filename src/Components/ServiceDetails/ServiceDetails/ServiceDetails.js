import React from 'react'
import { useParams } from 'react-router'

const ServiceDetails = () => {
  const { serviceId } = useParams()
  return (
    <div>
      <h3>This is service details. {serviceId}</h3>
    </div>
  )
}

export default ServiceDetails
