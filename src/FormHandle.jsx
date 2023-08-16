import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Can't be blank")
    .matches(
      /^[A-Za-z\s]+$/,
      "Wrong format: Only letters and spaces are allowed"
    ),
  cardNumber: Yup.string()
    .required("Can't be blank")
    .min(19, "")
    .matches(/^[0-9\s]+$/, "Wrong format"),
  month: Yup.string()
    .required("Can't be blank")
    .matches(/^[0-9]+$/, "Wrong format")
    .min(2, "Wrong format"),
  year: Yup.string()
    .required("Can't be blank")
    .matches(/^[0-9]+$/, "Wrong format")
    .min(2, "Wrong format"),
  cvc: Yup.string()
    .required("Can't be blank")
    .matches(/^[0-9]+$/, "Wrong format")
    .min(3, "Wrong format"),
});

const FormHandle = ({
  setShow,
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
}) => {
  const onSubmit = (values, { setSubmitting, isSubmitting, resetForm }) => {
    values.name = values.name.trim();
    // console.log(values);
    resetForm();
    setShow(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(props) => {
        const {
          handleBlur,
          setFieldValue,
          values,
          errors,
          touched,
          isValid,
          dirty,
        } = props;

        return (
          <Form>
            <div className="form-control">
              <div>
                <label className="l12" htmlFor="name">
                  CARDHOLDER NAME
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Jane Appleseed"
                  onChange={(e) => {
                    setFieldValue("name", e.target.value.toUpperCase());
                    setName(e.target.value);
                  }}
                />
              </div>

              <ErrorMessage className="error" component="div" name="name" />
            </div>

            <div className="form-control">
              <div>
                <label className="l12" htmlFor="cardNumber">
                  CARD NUMBER
                </label>
                <Field
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength="19"
                  onChange={(e) => {
                    setFieldValue(
                      "cardNumber",
                      e.target.value
                        .replace(/\s/g, "")
                        .replace(/(\d{4})/g, "$1 ")
                        .trim()
                    );
                    setNumber(e.target.value);
                  }}
                />
              </div>

              <ErrorMessage
                className="error"
                component="div"
                name="cardNumber"
              />
            </div>

            <div className="form-control">
              <div className="inputs">
                <div className="section">
                  <Field
                    type="text"
                    name="month"
                    id="month"
                    placeholder="MM"
                    maxLength="2"
                    onChange={(e) => {
                      setFieldValue("month", e.target.value);
                      setMonth(e.target.value);
                    }}
                  />
                  <ErrorMessage
                    className="error i1"
                    component="div"
                    name="month"
                  />
                </div>
                <div className="section">
                  <Field
                    type="text"
                    name="year"
                    id="year"
                    placeholder="YY"
                    maxLength="2"
                    onChange={(e) => {
                      setFieldValue("year", e.target.value);
                      setYear(e.target.value);
                    }}
                  />
                  <ErrorMessage
                    className="error i2"
                    component="div"
                    name="year"
                  />
                </div>
                <div className="section">
                  <Field
                    type="text"
                    name="cvc"
                    id="cvc"
                    placeholder="CVC"
                    maxLength="3"
                    onChange={(e) => {
                      setFieldValue("cvc", e.target.value);
                      setCvc(e.target.value);
                    }}
                  />
                  <ErrorMessage
                    className="error i3"
                    component="div"
                    name="cvc"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!(isValid && dirty)}
              style={{
                backgroundColor: isValid && dirty ? "#22092F" : "#22092f6c",
              }}
            >
              CONFIRM
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormHandle;
