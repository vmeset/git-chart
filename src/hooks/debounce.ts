import { useEffect, useState } from "react"

export const useDebounce = (query: string, delay: number): string => {
    const [debounced, setdebounced] = useState('')
    useEffect(() => {
      const handler = setTimeout(() => setdebounced(query), delay)
    
      return () => clearTimeout(handler)
    }, [query, delay])
    return debounced
}