'use client'
import React, { useEffect } from 'react'

export default function Page() {
    useEffect(() => {
        console.log("constomer page rendered");
        return () => {
            console.log("constomer page destroyed");
        }
    }, [])
  return (
    <div>cutomer page</div>
  )
}
