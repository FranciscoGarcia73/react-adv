import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "checkbox";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class"
      />
    </>
  );
};
