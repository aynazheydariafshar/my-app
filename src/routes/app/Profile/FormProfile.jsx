import { Box, Button, InputAdornment } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import MyInput from "components/FormikElements/MyInput";
import { elementOfProfile } from "constant";

const FormProfile = () => {
  const checkField = Yup.string().required("این فیلد الزامی است").trim();
  const checkPhone = Yup.string()
    .matches(/^09\d{9}$/, "شماره تماس معتبر نیست")
    .required("این فیلد الزامی است")
    .trim();

  return (
    <Formik
      validationSchema={Yup.object({
        nameCompany: checkField,
        numOfCompany: checkField,
        codeOfCompany: checkField,
        phoneNum: checkPhone,
        numOfFax: checkField,
        email: checkField,
        adress: checkField,
        nameManager: checkField,
        nameOfagent: checkField,
      })}
      initialValues={{
        nameCompany: "",
        numOfCompany: "",
        codeOfCompany: "",
        phoneNum: "",
        numOfFax: "",
        email: "",
        adress: "",
        nameManager: "",
        nameOfagent: "",
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
      }}
    >
      {({ values, touched, errors, setFieldValue }) => (
        <Form className="w-[30%] min-w-[300px]">
          {elementOfProfile.map((item, index) => {
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
                    <InputAdornment position="end">
                      <NavigateBeforeIcon />
                    </InputAdornment>
                  ),
                }}
                type={item.type}
              />
            );
          })}

          <Box className="flex justify-center items-center my-5">
            <Button className="w-[100px]" type="submit">
              تایید
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormProfile;
