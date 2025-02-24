'use client'

import { HomeScreen } from 'app/features/home/screen'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeScreen />
    </Suspense>
  )
}
