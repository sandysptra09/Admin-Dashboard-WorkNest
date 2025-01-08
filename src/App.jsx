import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import RoutesPath from './routes/Index'

export default function App() {
  return (
    <NextUIProvider>
      <RoutesPath />
    </NextUIProvider>
  )
}
