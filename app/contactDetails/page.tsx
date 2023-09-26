"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactDetails = () => {
  const defaultValues = {
    bookingFor: "",
    name: "",
    email: "",
    phone: "",
    summary: "",
  };

  const validationSchema = Yup.object({
    bookingFor: Yup.string().required("Please select one option"),
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email id")
      .required("Please enter your email"),
    phone: Yup.string().required("Please enter your phone number"),
    summary: Yup.string(),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <div className="container flex flex-row justify-center border-2">
        <div className="w-1/2 p-4 mt-4 flex">
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="flex">
                <div className="w-1/2 pr-4 border-2 rounded-md p-4 mb-4">
                  <div className="mb-4">
                    <h1 className="text-2xl font-bold">Contact Details</h1>
                    <p className="text-gray-400 text-[10px] pl-[2px]">
                      1 of 4 Steps
                    </p>
                  </div>
                  <hr className="mt-2 border-gray-300" />
                  <div className="">
                    <label className="block text-gray-600 font-bold mt-4">
                      You are Booking for:
                    </label>
                    <div className="inline-flex items-center mr-2 border-2 p-2">
                      <Field type="radio" name="bookingFor" value="myself" />
                      <span className="ml-2">Myself</span>
                    </div>
                    <div className="inline-flex items-center ml-2 border-2 p-2">
                      <Field type="radio" name="bookingFor" value="customer" />
                      <span className="ml-2">Customer</span>
                    </div>
                  </div>
                  <ErrorMessage
                    name="bookingFor"
                    component="div"
                    className="text-red-500"
                  />
                  <div className="mt-4">
                    <label className="block text-gray-600 font-bold">
                      Name:
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="w-full border rounded p-2"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-600 font-bold">
                      Email:
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full border rounded p-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-600 font-bold">
                      Phone Number:
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      className="w-full border rounded p-2"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full"
                  >
                    Save & Continue
                  </button>
                </div>

                <div className="w-1/2 pl-4 border-2 rounded-md p-4 ml-5">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold">Booking Summary</h2>
                    <p className="text-gray-400 text-[10px]">
                      Fill the information to generate property card
                    </p>
                  </div>
                  <hr className="mt-2 border-gray-300" />
                  <div className="mt-4">
                    <Field
                      as="textarea"
                      name="summary"
                      className="w-full h-80 border rounded p-2 flex text-center justify-center"
                      placeholder="Add booking summary here..."
                    />
                    <ErrorMessage
                      name="summary"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default contactDetails;
