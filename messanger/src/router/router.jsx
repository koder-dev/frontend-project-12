import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import NavigationBar from '../Components/Navigation/NavigationBar';
import Home from '../pages/Home';
import NotFound from './notFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationBar />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
