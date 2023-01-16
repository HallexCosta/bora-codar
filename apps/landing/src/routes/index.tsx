import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Landing } from '@landing//pages/Landing'
import Desafio1 from '@bora-codar/challenger-1'
import Desafio2 from '@bora-codar/challenger-2'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/desafio/1',
    element: <Desafio1 />
  },
  {
    path: '/desafio/2',
    element: <Desafio2 />
  }
])

export function Routes() {
  return <RouterProvider router={router} />
}
