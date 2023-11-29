import React, { useEffect, useState } from 'react'
function useLocalStorage(key) {
    const [localData, setLocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [])

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(localData))
    }, [localData])
    
    function handleStorage(data) {
        setLocalData(data)
    }

    return [localData,handleStorage]
}

export default useLocalStorage