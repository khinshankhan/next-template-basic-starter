import React from "react"
import { Foo } from "./components.client"

export default function Page() {
  return (
    <main className="grow">
      <p>Hello there</p>
      <p className="text-purple-700">This is purple</p>
      <Foo />
    </main>
  )
}
