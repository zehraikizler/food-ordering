import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";
import { useState } from "react";

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState("");
  const [iconName, setIconName] = useState("fa-brands fa-");
  const [icons, setIcons] = useState([
    "fa-brands fa-facebook",
    "fa-brands fa-twitter",
    "fa-brands fa-linkedin",
  ]);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
    console.log(values);
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your desc",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form
      className="flex flex-col flex-1 py-8 px-2 lg:px-8"
      onSubmit={handleSubmit}
    >
      <Title>Footer Settings</Title>
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
      <div className="mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4">
        <div className="flex items-cneter gap-4">
          <Input
            placeholder="Link Address"
            value="https://"
            onChange={(e) => setLinkAddress(e.target.value)}
          />
          <Input
            placeholder="Icon Name"
            value={iconName}
            onChange={(e) => setIconName(e.target.value)}
          />
          <button
            className="btn-primary"
            type="button"
            onClick={() => {
              setIcons([...icons, iconName]);
              setIconName("fa-brands fa-");
            }}
          >
            Add
          </button>
        </div>
        <ul className="flex items-center gap-6">
          {icons.map((icon, index) => (
            <li className="flex items-center" key={index}>
              <i className={`${icon}` + " text-2xl"}></i>
              <button
                className="text-danger"
                onClick={() =>
                  setIcons((prev) => prev.filter((item, i) => i !== index))
                }
                type="button"
              >
                <i className="fa fa-trash text-xl ml-2"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-primary mt-5 ml-auto" type="submit">
        Update
      </button>
    </form>
  );
};

export default Footer;
