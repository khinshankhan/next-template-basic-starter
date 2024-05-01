"use client"

import React, { useEffect, useState } from "react"

export function Foo() {
  const [message, setMessage] = useState("loading")
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("Hello from foo")
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return <div>{message}</div>
}
