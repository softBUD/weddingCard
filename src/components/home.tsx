import React, { useState, useEffect } from 'react'

export default function Home() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
    fetch('http://localhost:8080/wedding')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
  }, [])

  return <div>{JSON.stringify(wedding)}</div>
}
