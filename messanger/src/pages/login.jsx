import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import loginImage from '../assets/loginImage.jpg';

const Login = () => (
  <Container fluid className="h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col xs={12} md={8} xxl={6}>
        <Card className="shadow-sm">
          <Card.Body className="row p-5">
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
              <img src={loginImage} className="rounded-circle" alt="Войти" />
            </Col>
            <Form className="col-12 col-md-6 mt-3 mt-mb-0">
              <h1 className="text-center mb-4">Войти</h1>
              <Form.Group className="form-floating mb-3" controlId="username">
                <Form.Control
                  name="username"
                  autocomplete="username"
                  required=""
                  placeholder="Ваш ник"
                  id="username"
                  value=""
                />
                <Form.Label>Ваш ник</Form.Label>
              </Form.Group>
              <Form.Group className="form-floating mb-4" controlId="password">
                <Form.Control
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  placeholder="Пароль"
                  id="username"
                  value=""
                />
                <Form.Label>Пароль</Form.Label>
              </Form.Group>
              <Button variant="outline-primary" type="submit" className="w-100 mb-3">Войти</Button>
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
);

export default Login;
