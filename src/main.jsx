import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Layout/Home.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
import Applied from './components/Applied/Applied.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('./data/jobs.json'),
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>
      },
      {
        path: 'applied-jobs',
        element: <Applied></Applied>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
