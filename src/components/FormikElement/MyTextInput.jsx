import { InputAdornment, TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const MyTextInput = ({ icon, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)

  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      className={`${props.className}`}
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={!!meta.touched && !!meta.error}
      inputProps={{
        ...props.inputProps,
      }}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment
            className={`${!!meta.touched && !!meta.error ? "text-error" : ""}`}
            position="end"
          >
            {icon}
          </InputAdornment>
        ),
      }}
      {...field}
      {...props}
    />
  );
};

export default MyTextInput;
