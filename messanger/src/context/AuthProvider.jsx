import { useState } from 'react';
import axios from 'axios';
import { Provider } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAthentincate] = useState(false);


  const login = async ({ username, password }) => {
    const response = await axios.post('api/v1/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('JWTtoken', token);
    setIsAthentincate(true);
    setUser({ username, password, token });
  };

  const logout = () => {
    setIsAthentincate(false);
    setUser(null);
  };

  return (
    <Provider value={{
      user,
      isAuthenticated,
      login,
      logout,
    }}
    >
      {children}
    </Provider>
  );
};

export default AuthProvider;
