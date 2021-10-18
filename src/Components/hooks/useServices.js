import React, { useEffect, useState } from 'react'

const useServices = () => {
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, [])
  return [details, setDetails]
}

export default useServices
