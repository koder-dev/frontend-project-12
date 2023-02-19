import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import NavigationBar from './Components/NavigationBar';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationBar />,
    children: [
      {
        element: <Login />,
        index: true,
      },
      {
        path: '/login',
        element: <Home />,
      },
    ],
  },
]);

export default router;
