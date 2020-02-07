import React, { useState } from "react";
import VisualDataDebug from "./VisualDataDebug";
import { Formik } from "formik";

const BasicForm = () => {
  const [formValues, setFormValues] = useState({});
  return (
    <>
      <div>
        <h2>Let's Test a Form</h2>
        <div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email address is required!";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Hmm, that seems like an invalid email address!";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                //setting state so that it can be surfaced from inside Formik
                setFormValues(values);
                setSubmitting(false);
              }, 500);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              // these are helpers from Formik
            }) => (
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  Send it over!
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div>
        Initial Values
        <FormOutputDebug data={formValues} space={0}></FormOutputDebug>
      </div>
    </>
  );
};

export default BasicForm;
