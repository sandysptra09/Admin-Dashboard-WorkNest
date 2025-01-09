import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

// import path
import RoutesPath from './routes/Index'

export default function App() {
  return (
    <PrimeReactProvider>
      <NextUIProvider>
        <RoutesPath />
      </NextUIProvider>
    </PrimeReactProvider>

  )
}
