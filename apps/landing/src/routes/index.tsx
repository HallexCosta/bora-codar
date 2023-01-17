import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Landing } from '../pages/Landing'
//import Challenger1 from '@bora-codar/challenger-1'
//import Challenger2 from '@bora-codar/challenger-2'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Landing</div>
  },
  //{
  //  path: '/',
  //  element: <Navigate to="/landing" />
  //},
  //{
  //  path: '/landing',
  //  element: <Landing />
  //{
  //  path: '/challenger/1',
  //  element: <Challenger1 />
  //},
  //{
  //},
  //  path: '/challenger/2',
  //  element: <Challenger2 />
  //}
])

export function Routes() {
  return <RouterProvider router={router} />
}
