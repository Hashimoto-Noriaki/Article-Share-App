import { createBrowserRouter } from 'react-router-dom'; 
import { WelcomePage } from './pages/Home/WelcomePage';
import { LoginPage } from './pages/Login/LoginPage'; 
import { RegisterPage } from './pages/Register/RegisterPage';
import { UserGuidePage } from './pages/Guide/UserGuidePage';

export const router = createBrowserRouter([
    {path:'/',element: <WelcomePage/>},
    {path:'/login',element: <LoginPage/>},
    {path:'/register',element: <RegisterPage/>},
    {path:'/guide',element: <UserGuidePage/>}
])
