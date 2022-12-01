import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/authOperatoins';
import * as yup from 'yup';
import { ErrorMsg, FormStyled, Input, Label, SubmitBtn } from './Login.styled';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(15).required(),
});

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  //   handleChange = e => {
  //     const { name, value } = e.currentTarget;

  //     this.setState({ [name]: value });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.onSubmit(this.state);
  //     this.reset();
  //   };

  //   reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };
  // const { name, number } = this.state;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <Label htmlFor="email">
          Email
          <Input
            type="email"
            name="email"
            //   value={name}
          />
          <ErrorMsg component="div" name="email" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            //   value={number}
          />
          <ErrorMsg component="div" name="password" />
        </Label>
        <SubmitBtn type="submit">Log in</SubmitBtn>
      </FormStyled>
    </Formik>
  );
};
