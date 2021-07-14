import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormField, Button, Label } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import EmployeeService from "../../services/employeeService";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import "./Register.css";

export default function Register() {
  const initialValues = {
    dateOfBirth: new Date(),
    email: "",
    firstName: "",
    lastName: "",
    nationalityId: "",
    password: "",
    verifyPassword: "",
  };

  const schema = Yup.object({
    dateOfBirth: Yup.date().required("Doğum tarihi zorunludur."),
    email: Yup.string().required("E-posta zorunludur"),
    firstName: Yup.string().required("Ad zorunludur"),
    lastName: Yup.string().required("Soyad zorunludur"),
    nationalityId: Yup.string()
      .required("TC Kimlik zorunludur")
      .min(11, "TCKN 11 karakterden oluşmalıdır.")
      .max(11, "TCKN 11 karakterden oluşmalıdır."),
    password: Yup.string().required("Şifre zorunludur"),
    verifyPassword: Yup.string()
      .required("Şifre tekrarı zorunludur.")
      .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor"),
  });

  const history = useHistory();

  const handleSubmit = (values) => {
    let employeeService = new EmployeeService();
    employeeService
      .register(JSON.stringify(values))
      .then((s) => {
        if (s.data.success) {
          toast.success(s.data.message);
          history.push("/homepage"); // TO DO : login page redirect when it's done.
        } else {
          toast.error(`Kayıt Başarısız : ${s.data.message}`);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      <h5>
        İş Arayan kimliği ile kayıt olmak için aşşağıdaki bilgileri eksiksiz
        doldurun.
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <Form className="ui form">
          <HrmsTextInput
            name="email"
            placeholder="eposta@adres.com"
            label="E-posta Adresiniz"
          ></HrmsTextInput>
          <HrmsTextInput
            name="firstName"
            placeholder="Adınız"
            label="Adınız"
          ></HrmsTextInput>
          <HrmsTextInput
            name="lastName"
            placeholder="Soyadınız"
            label="Soyadınız"
          ></HrmsTextInput>
          <HrmsTextInput
            name="nationalityId"
            placeholder="TC Kimlik No"
            label="TC Kimlik No"
          ></HrmsTextInput>
          <HrmsTextInput
            type="date"
            name="dateOfBirth"
            placeholder="Doğum Tarihiniz"
            label="Doğum Tarihiniz"
          ></HrmsTextInput>
          <HrmsTextInput
            type="password"
            name="password"
            placeholder="Şifreniz"
            label="Şifreniz"
          ></HrmsTextInput>
          <HrmsTextInput
            type="password"
            name="verifyPassword"
            placeholder="Şifrenizi onaylayın"
            label="Şifrenizi onaylayın"
          ></HrmsTextInput>
          <Button color="green" type="submit">
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
