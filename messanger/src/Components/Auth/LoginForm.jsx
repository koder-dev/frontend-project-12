import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import loginImage from '../../assets/loginImage.jpg';
import loginScheme from '../../utils/validationScheme';
import MyForm from '../elements/MyForm';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginScheme}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        try {
          login(values);
          navigate('/');
        } catch (error) {
          setErrors({ password: 'Неправильний пароль', username: 'invalid username' });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {(formikValues) => (
        <Container fluid className="h-100">
          <Row className="justify-content-center align-content-center h-100">
            <Col xs={12} md={8} xxl={6}>
              <Card className="shadow-sm">
                <Card.Body className="row p-5">
                  <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <img src={loginImage} className="rounded-circle" alt="Войти" />
                  </Col>
                  <MyForm formikValues={formikValues} />
                </Card.Body>
                <Card.Footer className="p-4">
                  <div className="text-center">
                    <span>Нет аккаунта? </span>
                    <a href="/signup">Регистрация</a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default LoginForm;
