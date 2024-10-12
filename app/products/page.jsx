"use client"

import Products from "@/components/Products"
import { Suspense } from 'react'

export default function Page() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Products />
    </Suspense>
  )
}