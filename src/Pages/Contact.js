import React, { useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import Header from "../components/Header"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(40).label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.number().positive().required().label("Phone"),
  address: Yup.string().required().max(50).label("Address"),
})

const Contact = () => {
  const [value, setvalue] = useState()
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <h1>Form</h1>
        {value && (
          <div className='display'>
            <div className='data'>
              <h4>Name</h4> : {value.name}
            </div>
            <div className='data'>
              <h4>Email Id</h4> : {value.email}
            </div>
            <div className='data'>
              <h4>Phone</h4> : {value.phone}
            </div>
            <div className='data'>
              <h4>Address</h4> : {value.address}
            </div>
          </div>
        )}
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setvalue(values)
          }}>
          {({
            submitForm,
            isSubmitting,
            touched,
            errors,
            setFieldValue,
            values,
          }) => (
            <Form className='form'>
              <Field
                disabled={isSubmitting}
                placeholder='Name'
                name='name'
                className='field'
              />
              {errors.name && touched.name && (
                <span className='error'>{errors.name}</span>
              )}
              <Field
                disabled={isSubmitting}
                placeholder='Email'
                name='email'
                className='field'
              />
              {errors.email && touched.email && (
                <span className='error'>{errors.email}</span>
              )}
              <Field
                disabled={isSubmitting}
                placeholder='Phone'
                name='phone'
                className='field'
              />
              {errors.phone && touched.phone && (
                <span className='error'>{errors.phone}</span>
              )}
              <Field
                disabled={isSubmitting}
                placeholder='Address'
                name='address'
                className='field'
              />
              {errors.address && touched.address && (
                <span className='error'>{errors.address}</span>
              )}
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Contact
