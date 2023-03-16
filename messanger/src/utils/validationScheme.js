import * as yup from 'yup';

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

export default loginScheme;
