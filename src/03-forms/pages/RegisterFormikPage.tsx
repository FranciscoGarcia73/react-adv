import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracteres o mas ")
            .max(15, "El nombre pude contener como maximo 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              name="name"
              label="Nombre"
              placeholder="Escribe tu nombre"
            />
            <MyTextInput
              name="email"
              label="Correo Electronico"
              type="email"
              placeholder="Escribe tu correo electronico"
            />
            <MyTextInput
              name="password1"
              label="Contraseña"
              type="password"
              placeholder="Escribe tu contraseña (minimo 6 caracteres)"
            />
            <MyTextInput
              name="password2"
              label="Confirma tu Contraseña"
              type="password"
              placeholder="Repite tu contraseña"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={formik.handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
