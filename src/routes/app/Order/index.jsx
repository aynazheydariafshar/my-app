import { Form, Formik } from "formik";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  Box,
  Button,
  InputAdornment,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import "react-multi-date-picker/styles/layouts/prime.css";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import Layout from "components/ElementsLayout/Layout";

const Order = () => {
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
  return (
    <Layout title="ثبت سفارش">
      <Formik
        // validationSchema={Yup.object({
        //   date: date_validate,
        //   end_date: end_date_validate("date"),
        // })}
        initialValues={{
          product_type: "",
          weight: 0,
          vehicle_type: "",
          loading_location: "",
          loading_date: "",
          border_passage: "",
        }}
        onSubmit={(values, actions) => {
          //   actions.setSubmitting(true);
          //   console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="w-[350px]">
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
                  <TextField
                    fullWidth
                    name={item.name}
                    label={item.title}
                    InputProps={{
                      style: {
                        borderRadius: "20px",
                        backgroundColor: "rgb(214, 220, 227)",
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          {<NavigateBeforeIcon />}
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
              className="p-2 border border-[#858688] w-full rounded-[20px]"
              placeholder="توضیحات"
              style={{
                backgroundColor: "rgb(214, 220, 227)",
                margin: "10px 0",
              }}
            />
            <Box className="flex justify-center items-center">
              <Button className="w-[100px]" type="submit">تایید</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Order;
