import { Field, Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/loginImage.jpg';

const loginScheme = yup.object().shape({
  username: yup.string()
    .min(2, 'Too short!')
    .max(30, 'Too Long!')
    .required('Username required'),
  password: yup.string()
    .min(4, 'Too short')
    .max(30, 'Too Long!')
    .required('Password required'),
});

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginScheme}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        try {
          const response = await axios.post('api/v1/login', { username: values.username, password: values.password });
          localStorage.setItem('JWTtoken', response.data.token);
          navigate('/');
        } catch (error) {
          setErrors({ password: 'Неправильний пароль', username: 'invalid username' });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        isLoading,
        touched,
        handleSubmit,
        handleChange,
        values,
      }) => (
        <Container fluid className="h-100">
          <Row className="justify-content-center align-content-center h-100">
            <Col xs={12} md={8} xxl={6}>
              <Card className="shadow-sm">
                <Card.Body className="row p-5">
                  <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <img src={loginImage} className="rounded-circle" alt="Войти" />
                  </Col>
                  <Form onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                    <h1 className="text-center mb-4">Войти</h1>
                    <Form.Group className="form-floating mb-3">
                      <Field
                        name="username"
                        as={Form.Control}
                        isInvalid={touched.username && errors.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required=""
                        placeholder="Ваш ник"
                        id="username"
                        value={values.username}
                      />
                      <Form.Label>Ваш ник</Form.Label>
                    </Form.Group>
                    <Form.Group className="form-floating mb-4">
                      <Field
                        as={Form.Control}
                        isInvalid={touched.password && errors.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        autoComplete="current-password"
                        required=""
                        placeholder="Пароль"
                        id="password"
                        value={values.password}
                      />
                      {(touched.password && errors.password) && (
                        <div className="invalid-tooltip">
                          Неверные имя пользователя или пароль
                        </div>
                      )}
                      <Form.Label>Пароль</Form.Label>
                    </Form.Group>
                    <Button variant="outline-primary" type="submit" className="w-100 mb-3">
                      {isLoading ? (
                        <>
                          <Spinner animation="border" role="status" size="sm" />
                          <span className="sr-only">Loading...</span>
                        </>
                      ) : (
                        'Войти'
                      )}
                    </Button>
                  </Form>
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
