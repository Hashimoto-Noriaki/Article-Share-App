import { createBrowserRouter } from 'react-router-dom'; 
import { WelcomePage } from './pages/Home/WelcomePage';
import { LoginPage } from './pages/Login/LoginPage'; 

export const router = createBrowserRouter([
    {path:'/',element: <WelcomePage/>},
    {path:'/login',element: <LoginPage/>}
])
