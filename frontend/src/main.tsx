import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { LoginUserProvider } from "./shared/contexts/LoginUser/LoginUserProvider"; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginUserProvider>
      <RouterProvider router={router}/>
    </LoginUserProvider>
  </React.StrictMode>,
)