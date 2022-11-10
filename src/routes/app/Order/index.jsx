import { Form, Formik } from "formik";

import Layout from "components/ElementsLayout/Layout";
import MyTextInput from "components/FormikElement/MyTextInput";
import { Home } from "@mui/icons-material";

const Order = () => {
  return (
    <Layout title="ثبت سفارش">
      <Formik
        // validationSchema={Yup.object({
        //   date: date_validate,
        //   end_date: end_date_validate("date"),
        // })}
        initialValues={{
          typeOfProduct: "",
        }}
        onSubmit={(values, actions) => {
          //   actions.setSubmitting(true);
          //   console.log(values);
        }}
      >
        <Form className="w-[500px]">
          <MyTextInput
            name="typeOfProduct"
            label="نوع کالا"
            size="small"
            InputProps={{
              style: { borderRadius: "20px" },
            }}
            style={{ margin: "20px 0" }}
            inputProps={{
              style: {
                color: "black",
                backgroundColor: "rgb(214, 220, 227)",
                borderRadius: "20px",
              },
            }}
            InputLabelProps={{
              style: { float: "right" },
            }}
            icon={<Home />}
            type="text"
          />
          <MyTextInput
            name="typeOfProduct"
            label="نوع کالا"
            size="small"
            InputProps={{
              style: { borderRadius: "20px" },
            }}
            style={{ margin: "20px 0" }}
            inputProps={{
              style: {
                color: "black",
                backgroundColor: "rgb(214, 220, 227)",
                borderRadius: "20px",
              },
            }}
            InputLabelProps={{
              style: { float: "right" },
            }}
            icon={<Home />}
            type="text"
          />
        </Form>
      </Formik>
    </Layout>
  );
};

export default Order;
