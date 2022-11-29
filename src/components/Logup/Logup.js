import { Formik } from 'formik';
import * as yup from 'yup';
import { ErrorMsg, FormStyled, Input, Label, SubmitBtn } from './Logup.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(15).required(),
});

export const Logup = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // this.props.onSubmit(values);
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
        <Label htmlFor="name">
          Name
          <Input
            type="name"
            name="name"
            //   value={name}
          />
          <ErrorMsg component="div" name="name" />
        </Label>
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
        <SubmitBtn type="submit">Log up</SubmitBtn>
      </FormStyled>
    </Formik>
  );
};
