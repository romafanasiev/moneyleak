import * as yup from 'yup';

const validationSchema = yup
  .object({
    email: yup.string().email('Invalid email').required('Required email'),
    login: yup
      .string()
      .required('Required login')
      .min(4, 'Must be minimum 4 characters length'),
    password: yup
      .string()
      .required('Required password')
      .min(6, 'Must be minimum 6 characters length'),
  })
  .required();

export default validationSchema;
