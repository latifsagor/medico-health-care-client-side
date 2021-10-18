import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import useServices from '../../hooks/useServices'

const ServiceDetails = () => {
  const { id } = useParams()
  const [details] = useServices()

  const element = details?.find((detail) => Number(detail.id) === Number(id))
  console.log(element)
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <img src={element?.img} alt="" />
          <h2>{element?.name}</h2>
          <p>{element?.description}</p>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  )
}

export default ServiceDetails

// [
//   element ? (
//     <div>
//       <img src={element.img} alt="" />
//       <h2>{element.name}</h2>
//       <p>{element.description}</p>
//     </div>
//   ) : (
//     (history.push = '/home')
//   ),
// ]

// {element ? (
//   <SingleService element={element}></SingleService>
// ) : (
//   history.push('/home')
// )}
