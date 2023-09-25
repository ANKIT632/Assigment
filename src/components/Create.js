import React from 'react';
import { Formik,  Form ,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';


const CreateForm = () => {
  const handleSubmit = async (values) => {
    // Simulate a POST request to an API endpoint (replace with your actual API endpoint)
    try {
      // Replace the following with your actual API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Form submitted successfully!',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Form submission failed. Please try again.',
      });
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
      .required('Phone number is required').max(10,"incorrect").min(10,"incorrect"),
    website: Yup.string().url('Invalid URL').required('Website is required'),
  });

  return (
    <div className="container mt-2 " >
      <h2 className="text-center">Create Form</h2>
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          address: '',
          phone: '',
          website: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
    
        
        <Form  className='container d-grid justify-content-center align-items-center ' >
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">Username</label>
            <Field type="text" id="username" name="username" className="form-control" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="form-label">Address</label>
            <Field type="text" id="address" name="address" className="form-control" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">Phone</label>
            <Field type="text" id="phone" name="phone" className="form-control" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <div className="mb-2">
            <label htmlFor="website" className="form-label">Website</label>
            <Field type="text" id="website" name="website" className="form-control" />
            <ErrorMessage name="website" component="div" className="error" />
          </div>
            
          <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
        </Form>
    
      </Formik>
    </div>
  );
};


export default CreateForm;
