import { createContext, useContext } from 'react';

const AuthContext = createContext();
export const { Provider } = AuthContext;
export const useAuth = () => useContext(AuthContext);
