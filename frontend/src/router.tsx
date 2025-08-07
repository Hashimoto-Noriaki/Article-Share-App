import { createBrowserRouter } from 'react-router-dom';
import { WelcomePage } from './pages/Home/WelcomePage';
import { LoginPage } from './pages/Auth/Login/LoginPage';
import { RegisterPage } from './pages/Auth/Register/RegisterPage';
import { UserGuidePage } from './pages/Guide/UserGuidePage';
import { ArticleSharePage } from './pages/Article/ArticleSharePage';
import { RegisterArticlePage } from './pages/Article/RegisterArticlePage';
import { NotLoginLayout } from './features/components/templates/NotLoginLayout';
import { LoginLayout } from './features/components/templates/LoginLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NotLoginLayout />,
    children: [{ index: true, element: <WelcomePage /> }],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/guide',
    element: <UserGuidePage />,
  },
  {
    element: <LoginLayout />,
    children: [
      { path: '/article_share', element: <ArticleSharePage /> },
      { path: '/register_article', element: <RegisterArticlePage /> },
    ],
  },
]);
