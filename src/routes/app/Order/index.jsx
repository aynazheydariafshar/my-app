import { Form, Formik } from "formik";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import "react-multi-date-picker/styles/layouts/prime.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import React from "react";
import axios from "axios";
import * as Yup from "yup";

import Layout from "components/ElementsLayout/Layout";
import { STATIC } from "constant";
import MyInput from "components/FormikElements/MyInput";

const Order = () => {
  //check for api
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const checkField = Yup.string().required("این فیلد الزامی است").trim();
  const elementsField = [
    {
      name: "product_type",
      title: "نوع کالا",
      type: "text",
    },
    {
      name: "weight",
      title: "وزن",
      type: "number",
    },
    {
      name: "vehicle_type",
      title: "نوع ناوگان",
      type: "text",
    },
    {
      name: "loading_location",
      title: "محل بارگیری",
      type: "text",
    },
    {
      name: "unloading_loc",
      title: "محل تخلیه",
      type: "text",
    },
    {
      name: "loading_date",
      title: "تاریخ بارگیری",
      type: "date",
    },
    {
      name: "border_passage",
      title: "نام اعلام کننده بار",
      type: "text",
    },
    {
      name: "loading_hour",
      title: "",
      type: "time",
    },
  ];

  const postData = (values) => {
    setError(null);
    setLoading(false);
    axios
      .post(`${STATIC}/trader/orders`, {
        product_type: values.product_type,
        weight: values.weight,
        vehicle_type: values.vehicle_type,
        loading_location: values.loading_location,
        unloading_loc: values.unloading_loc,
        loading_date: values.loading_date,
        border_passage: values.border_passage,
        loading_hour: values.loading_hour,
        description: values.description,
      })
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("دوباره تلاش کنید");
      });
  };

  return (
    <Layout title="ثبت سفارش">
      {loading && (
        <Box className="flex justify-center items-center">
          <CircularProgress />
        </Box>
      )}
      <Formik
        validationSchema={Yup.object({
          product_type: checkField,
          weight: checkField,
          vehicle_type: checkField,
          loading_location: checkField,
          unloading_loc : checkField,
          loading_date: checkField,
          border_passage: checkField,
          loading_hour: checkField,
        })}
        initialValues={{
          product_type: "",
          weight: 0,
          vehicle_type: "",
          loading_location: "",
          loading_date: "",
          unloading_loc : "",
          border_passage: "",
          loading_hour: "",
          description: "",
        }}
        onSubmit={(values, actions) => {
          postData(values);
          alert(JSON.stringify(values));
          console.log("f");
        }}
      >
        {({ values, touched, errors, setFieldValue }) => (
          <Form className="w-[30%] min-w-[300px]">
            {elementsField.map((item, index) => {
              if (index === 5) {
                return (
                  <DatePicker
                    style={{
                      width: "100%",
                      height: "40px",
                      backgroundColor: "rgb(214, 220, 227)",
                      borderRadius: "20px",
                      borderColor: "#858688",
                      margin: "10px 0",
                    }}
                    placeholder={item.title}
                    fullWidth
                    name={item.name}
                    containerStyle={{
                      width: "100%",
                    }}
                    calendarPosition="top-center"
                    calendar={persian}
                    locale={persian_fa}
                    weekPicker={false}
                    onChange={(e) =>
                      setFieldValue(item.name, e.unix * 1000, true)
                    }
                    value={values.loading_date}
                    minDate={new DateObject({ calendar: persian })}
                  />
                );
              } else {
                return (
                  <MyInput
                    name={item.name}
                    label={item.title}
                    InputProps={{
                      style: {
                        borderRadius: "20px",
                        backgroundColor: "rgb(214, 220, 227)",
                      },
                      endAdornment: (
                        <InputAdornment
                          position="end"
                        >
                          <NavigateBeforeIcon />
                        </InputAdornment>
                      ),
                    }}
                    type={item.type}
                  />
                );
              }
            })}
            <TextareaAutosize
              minRows={2}
              name="description"
              className="p-2 border border-[#858688] w-full rounded-[20px]"
              placeholder="توضیحات"
              style={{
                backgroundColor: "rgb(214, 220, 227)",
                margin: "10px 0",
              }}
            />
            <Box className="flex justify-center items-center my-5">
              <Button className="w-[100px]" type="submit">
                تایید
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Order;
