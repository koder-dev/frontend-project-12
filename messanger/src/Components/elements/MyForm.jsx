import { Form, Button, Spinner } from 'react-bootstrap';
import { Field } from 'formik';

const MyForm = ({ formikValues }) => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    touched,
    isLoading,
  } = formikValues;

  return (
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
  );
};

export default MyForm;
