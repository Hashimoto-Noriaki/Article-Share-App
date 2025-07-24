import { createBrowserRouter } from 'react-router-dom'; 
import { WelcomePage } from './pages/Home/WelcomePage';
import { LoginPage } from './pages/Auth/Login/LoginPage'; 
import { RegisterPage } from './pages/Auth/Register/RegisterPage';
import { UserGuidePage } from './pages/Guide/UserGuidePage';
import { ArticleSharePage } from './pages/Article/ArticleSharePage';
import { RegisterArticlePage } from './pages/Article/RegisterArticlePage';

export const router = createBrowserRouter([
    {path:'/',element: <WelcomePage/>},
    {path:'/login',element: <LoginPage/>},
    {path:'/register',element: <RegisterPage/>},
    {path:'/guide',element: <UserGuidePage/>},
    {path:'/article_share',element: <ArticleSharePage/>},
    {path:'/register_article',element: <RegisterArticlePage/>}
])
