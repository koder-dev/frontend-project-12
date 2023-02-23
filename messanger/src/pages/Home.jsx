import { Navigate } from 'react-router-dom';

const Home = () => {
  const JWTtoken = localStorage.getItem('JWTtoken');

  if (!JWTtoken) {
    return <Navigate to="/login" />;
  }
  return <div>This is home</div>;
};

export default Home;
