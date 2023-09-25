import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';


const Login = () => {
  const [redirectToCreate, setRedirectToCreate] = React.useState(false);
  const [user, setUser] = React.useState("Login")
 

  const handleSubmit = (values, { resetForm }) => {
    // Implement form submission logic, including data validation
    if ((values.email === 'user@example.com' && values.password === 'password') || user === "SignUp") {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Login successful!',
      }).then(() => {
        resetForm();
        setRedirectToCreate(true);

      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Invalid credentials. Please try again.',
      });
    }

  };

  if (redirectToCreate) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div style={{
      background: "rgb(152, 197, 236)",

      border: "2px",
      display: " inline-block",
      padding: " 20px",
      borderStyle: " hidden",
      boxShadow: " 0px 6px 8px rgba(0, 0, 0, 0.5)"
    }} className='d-grid justify-content-center'>
      <h2>{user}</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label><br />
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <br />
          <button  className='btn btn-primary mx-3' onClick={() => setUser("LogIn")}>LogIn</button>
          <button  className='btn btn-primary' onClick={() => setUser("SignUp")}>SignUp</button> <br/>
          <button type='submit' className='btn btn-success mx-3 my-2'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
