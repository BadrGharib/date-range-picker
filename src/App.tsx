import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
const ExchangeRate = React.lazy(async () => await import('./pages/ExchangeRate/ExchangeRate'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <ExchangeRate />,
    errorElement: <div>No Page Found</div>
  }
])
const App: React.FC = () => {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
