import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingIn from './SingIn'
import Home from './Home'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/singin",
            element:<SingIn/>
        },
        {
            path:"/",
            element:<Home/>
        }

    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
