import { Formik } from "formik";
import * as yup from "yup";
import google from "../../images/google icon.svg";

import {
  Error,
  GoogleButton,
  GoogleLogo,
  GoogleSection,
  InputField,
  LabelField,
  LogiBtn,
  Register,
  Section,
  SectionLogin,
} from "./login.styled";

const Login = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .typeError("Will be a string")
      .min(4)
      .required("Required"),
    password: yup
      .string()
      .typeError("Will be a string")
      .min(6)
      .required("Required"),
  });

  return (
    <>
      <Section>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <SectionLogin>
                <GoogleSection>
                  <GoogleButton type="submit">
                    <GoogleLogo src={google} alt="google" />
                    Google
                  </GoogleButton>
                </GoogleSection>

                <LabelField>Email</LabelField>
                <InputField
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}

                <LabelField>Password</LabelField>
                <InputField
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <Error>{errors.password}</Error>
                ) : null}

                <LogiBtn type="submit">Login</LogiBtn>
                <Register href="/">Register</Register>
              </SectionLogin>
            </form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default Login;
