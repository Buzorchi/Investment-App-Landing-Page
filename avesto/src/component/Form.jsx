import React from "react";
import { Formik } from "formik";

const Form = () => {
  // Function to check password conditions
  const isPasswordValid = (password) => {
    // Add your password conditions here
    // For example, at least 8 characters, one uppercase, one lowercase, and one digit
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", mobileNumber: "", password: "", confirmPassword: "" }}
        validate={(values) => {
          const errors = {};
         // First Name validation
         if (!values.firstName) {
          errors.firstName = "First name is required";
        }

        // Last Name validation
        if (!values.lastName) {
          errors.lastName = "Last name is required";
        }

        // Email validation
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }

        // Mobile Number validation
        if (!values.mobileNumber) {
          errors.mobileNumber = "Mobile number is required";
        } else if (!/^[0-9]{1,11}$/i.test(values.mobileNumber)){
          errors.mobileNumber = "Invalid mobile number";
        }

        // Password validation
        if (!values.password) {
          errors.password = "Password is required";
        } else if (!isPasswordValid(values.password)) {
          errors.password =
            "Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one digit";
        }

        // Confirm Password validation
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        }

        return errors;
      }}
        onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {

          if (!isPasswordValid(values.password)) {
            // If the password is not valid, set an error message and return early
            setErrors({ password: "Invalid password" });
            setSubmitting(false);
            return;
          }
          setTimeout(() => {
            console.log("Submitting form with values:", values)
            // alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 200);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div class="flex-col justify-start items-start gap-2 flex">
              <label class="text-stone-950 text-opacity-50 text-base font-semibold ">
                First Name
              </label>
              <input
                class="w-[650px] px-6 py-[18px] bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-lg font-semibold"
                placeholder="Enter your first name"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && errors.firstName}
            </div>

            <div class="flex-col justify-start items-start gap-2 flex mt-10">
              <label class="text-stone-950 text-opacity-50 text-base font-semibold ">
                Last Name
              </label>
              <input
                class="w-[650px] px-6 py-[18px] bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-lg font-semibold"
                placeholder="Enter your last name"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && errors.lastName}
            </div>

            <div class="flex-col justify-start items-start gap-2 flex mt-10">
              <label class="text-stone-950 text-opacity-50 text-base font-semibold ">
                Email Address
              </label>
              <input
                class="w-[650px] px-6 py-[18px] bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-lg font-semibold"
                placeholder="Enter your email address"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>

            <div class="flex-col justify-start items-start gap-2 flex mt-10">
              <label class="text-stone-950 text-opacity-50 text-base font-semibold ">
                Mobile Number
              </label>
              <input
                class="w-[650px] px-6 py-[18px] bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-lg font-semibold"
                placeholder="Enter your phone number"
                type="tel"
                name="mobileNumber"
                onChange={(e) => {
                  // Limit input to 11 characters
                  const inputValue = e.target.value.slice(0, 11);
                  handleChange({
                    target: {
                      name: "mobileNumber",
                      value: inputValue,
                    },
                  });
                }}
                onBlur={handleBlur}
                value={values.mobileNumber}
              />
              {errors.mobileNumber && touched.mobileNumber && errors.mobileNumber}
            </div>

            <div class="flex-col justify-start items-start gap-2 flex mt-10">
              <label class="text-stone-950 text-opacity-50 text-base font-semibold ">
                Password
              </label>
              <input
                class="w-[650px] px-6 py-[18px] bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-lg font-semibold"
                placeholder="Create your password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </div>

            <div class="flex-col justify-start items-start gap-2 flex mt-10">
              <label class="text-stone-950 text-opacity-50 text-base font-semibold ">
                Confirm Password
              </label>
              <input
                class="w-[650px] px-6 py-[18px] bg-white rounded-sm border border-stone-950 border-opacity-25 justify-start items-center text-stone-950 text-lg font-semibold"
                placeholder="Confirm your password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
            </div>

            <button type="submit" disabled={isSubmitting} class=" mt-10 w-[650px] px-4 py-[19px] bg-black rounded-sm justify-center items-center gap-2.5 inline-flex text-white text-base font-semibold">
              Get Started
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
