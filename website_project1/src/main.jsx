import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import About from './assets/about.jsx'
import Home from './assets/components/homepage/home.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import Github from './assets/Github.jsx'
const router =createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:'',
    element:<Home />
  },{
    path:'About',
    element:<About/>
  },{
    path:'github',
    element:<Github/>
  }
]

}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
