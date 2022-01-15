import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .required("Requerido")
            .email("Email no tiene formato valido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["itJunior"], "Esta opción no es permitida"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component={"span"} />
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component={"span"} />
            <label htmlFor="email">Email Address</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component={"span"} />
            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Pick something</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="itSenior">IT Senior</option>
              <option value="itJunior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} />
            <label>
              <Field type="checkbox" name="terms" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component={"span"} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
