import { useState, useEffect, useCallback } from 'react'
import { WeddingEvent } from '../types'

const useFetchWedding = () => {
  const [wedding, setWedding] = useState<WeddingEvent>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchWedding = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:8080/wedding')
      if (!response.ok) {
        throw new Error('에러 발생')
      }
      const data: WeddingEvent = await response.json()
      setWedding(data)
      setError(null)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchWedding()
  }, [fetchWedding])

  return { wedding, loading, error, refetch: fetchWedding }
}
