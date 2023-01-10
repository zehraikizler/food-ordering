import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { newPasswordSchema } from "../../schema/newPassword";

const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
    console.log(values);
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <form
      className="flex flex-col flex-1 py-8 px-2 lg:px-8"
      onSubmit={handleSubmit}
    >
      <Title>Password</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="btn-primary mt-5 ml-auto" type="submit">
        Update
      </button>
    </form>
  );
};

export default Password;
