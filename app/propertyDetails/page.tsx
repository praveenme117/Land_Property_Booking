"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PropertyDetails = () => {
  const defaultValues = {
    checkType: "",
    addReInspection: false,
    whatInspecting: "",
    bedrooms: "0",
    area: "",
    propertyNumber: "",
    checkboxes: [false, false, false, false, false, false, false, false],
  };

  const validationSchema = Yup.object({
    checkType: Yup.string().required("Please select one option"),
    addReInspection: Yup.boolean().required("Please select one option"),
    whatInspecting: Yup.string().required("Please select one option"),
    bedrooms: Yup.string().required("Please enter bedrooms"),
    area: Yup.string().required("Please enter area"),
    propertyNumber: Yup.string().required("Please enter property number"),
    checkboxes: Yup.array()
      .of(Yup.boolean())
      .required("Please select at least one option"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    const checkedCheckboxes = values.checkboxes
      .map((isChecked: boolean, index: number) =>
        isChecked ? { isChecked, index } : null
      )
      .filter((item: any) => item !== null)
      .map((item: any) => item.index);

    const checkedCheckboxTexts = checkedCheckboxes.map(
      (index: number) => sentenceArray[index]
    );

    console.log("Checked Checkboxes Text:", checkedCheckboxTexts);
    console.log("Form Values:", values);
  };

  const sentenceArray = [
    "Worlds most-detailed property inspection",
    "Protection from an average of 49,920 AED in maintenance costs",
    "Negotiate better purchase price",
    "Walk away from money pit properties",
    "Peace of mind-priceless, eh!",
    "Purchase with full transparency and protection",
    "Full support before, during and after your Property check",
    "Solutions for every problem we find - certified partners and contractors",
  ];

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
                    <h1 className="text-2xl font-bold">PROPERTY DETAILS</h1>
                    <p className="text-gray-400 text-[10px] pl-[2px]">
                      2 of 4 Steps
                    </p>
                  </div>
                  <hr className="mt-2 border-gray-300" />
                  <div className="">
                    <label className="block text-gray-600 font-bold mt-4">
                      Check Type: *
                    </label>
                    <div className="flex flex-wrap -mx-1 text-[12px]">
                      {[
                        "Handover",
                        "Secondary market",
                        "Renter",
                        "Current owner",
                      ].map((value) => (
                        <div key={value} className="w-1/2 px-2 mb-2">
                          <div className="border-2 p-2 flex items-center">
                            <Field
                              type="radio"
                              name="checkType"
                              value={value}
                            />
                            <span className="ml-2">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage
                      name="checkType"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />

                    <div className="w-full px-2 flex items-center">
                      <Field type="checkbox" name="addReInspection" />
                      <label className=" ml-2 block text-gray-600 font-bold text-[15px]">
                        Add Re-inspection (AED 500)
                      </label>
                    </div>
                    <ErrorMessage
                      name="addReInspection"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />

                    <label className="block text-gray-600 font-bold mt-4">
                      What are we inspecting? *
                    </label>
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-1/2 px-2 mb-2">
                        <div className="border-2 p-2 flex items-center">
                          <Field
                            type="radio"
                            name="whatInspecting"
                            value="apartment"
                          />
                          <span className="ml-2 text-[13px]">Apartment</span>
                        </div>
                      </div>
                      <div className="w-1/2 px-2 mb-2">
                        <div className="border-2 p-2 flex items-center">
                          <Field
                            type="radio"
                            name="whatInspecting"
                            value="villa"
                          />
                          <span className="ml-2 text-[13px]">Villa</span>
                        </div>
                      </div>
                    </div>
                    <ErrorMessage
                      name="whatInspecting"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />

                    <label className="block text-gray-600 font-bold mt-4">
                      How many Bedrooms?*
                      <p className="text-gray-400 text-[10px]">
                        Maids are people too, please include them also!
                      </p>
                    </label>
                    <Field type="range" name="bedrooms" min="0" max="10" />
                    <ErrorMessage
                      name="bedrooms"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />

                    <label className="block text-gray-600 font-bold mt-4">
                      Area/Building: *
                    </label>
                    <Field
                      as="select"
                      name="area"
                      className="w-full border rounded p-2"
                    >
                      <option value="AlQuasis">Al Quasis</option>
                      <option value="qatar">Qatar</option>
                      <option value="dubia">Dubai</option>
                    </Field>
                    <ErrorMessage
                      name="area"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />

                    <label className="block text-gray-600 font-bold mt-4">
                      Property Number: *
                    </label>
                    <Field
                      type="text"
                      name="propertyNumber"
                      className="w-full border rounded p-2"
                    />
                    <ErrorMessage
                      name="propertyNumber"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />

                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full"
                    >
                      Save & Continue
                    </button>
                  </div>
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
                    <div className="flex">
                      <div className="w-1/2 pr-4">
                        <h3 className="text-lg font-bold">For</h3>
                        <p className="text-gray-400 text-sm">Ratul Singh</p>
                        <p className="text-gray-400 text-[8px]">
                          BBO 1314 DQ 000 | random@gmail.com
                        </p>
                      </div>

                      <div className="w-1/2 pl-4">
                        <h3 className="text-lg font-bold">Where</h3>
                        <p className="text-gray-400 text-sm">AL Quasian</p>
                        <p className="text-gray-400 text-[8px]">
                          Rd No. 233, Masjid Road
                        </p>
                      </div>
                    </div>
                    <hr className="mt-4 border-gray-300" />

                    <div className="mt-2 text-[12px]">
                      {sentenceArray.map((sentence, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <Field
                            type="checkbox"
                            name={`checkboxes[${index}]`}
                            id={`checkbox_${index}`}
                          />
                          <label className="ml-2 flex items-center">
                            {sentence}
                          </label>
                        </div>
                      ))}
                    </div>
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

export default PropertyDetails;
