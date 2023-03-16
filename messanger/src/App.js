import './assets/App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import AuthProvider from './context/AuthProvider';

const App = () => (
  <AuthProvider><RouterProvider router={router} /></AuthProvider>
);

export default App;
