import { lazy } from 'react';
import App from 'App';
import { Navigate } from 'react-router-dom';

const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Home = lazy(() => import('pages/Home'));

const Routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? <App /> : <Navigate to="/login" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
  },
  {
    path: '/register',
    element: !isLoggedIn ? <Register /> : <Navigate to="/" />,
  },
];

export default Routes;
