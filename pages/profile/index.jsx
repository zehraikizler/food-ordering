import Image from "next/image";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { accountSchema } from "../../schema/account";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      onSubmit,
      validationSchema: accountSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];

  return (
    <div className="min-h-[calc(100vh_-_433px)] flex px-10 mt-10">
      <div className="flex-shrink-0 w-80">
        <div className="relative flex flex-col items-center border border-b-0 rounded-t-md">
          <Image
            src="/images/profile/profile-photo.jpg"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full mt-10"
          />
          <b className="text-2xl mt-1 px-10 py-5">Zehra İkizler</b>
        </div>
        <ul className="font-semibold">
          <li className="border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-home mx-2"></i>
            <button>Account</button>
          </li>
          <li className="border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-key mx-2"></i>
            <button>Password</button>
          </li>
          <li className="border border-b-0 w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-motorcycle mx-2"></i>
            <button>Orders</button>
          </li>
          <li className="border rounded-b-md w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-sign-out mx-2"></i>
            <button>Exit</button>
          </li>
        </ul>
      </div>

      <form className="flex flex-col flex-1 p-8" onSubmit={handleSubmit}>
        <Title>Account Settings</Title>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          ))}
        </div>
        <button className="btn-primary mt-5 ml-auto">Update</button>
      </form>
    </div>
  );
};

export default Profile;
