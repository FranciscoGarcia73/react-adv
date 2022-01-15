import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

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
            <MyTextInput
              name="firstName"
              label="First Name"
              placeholder="Francisco"
            />
            <MyTextInput
              name="lastName"
              label="Last Name"
              placeholder="Garcia"
            />
            <MyTextInput
              name="email"
              label="Email Address"
              type="email"
              placeholder="ejemplo@dominio.com"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="itSenior">IT Senior</option>
              <option value="itJunior">IT Junior</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms & Conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
