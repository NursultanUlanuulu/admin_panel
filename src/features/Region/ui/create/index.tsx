import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "../../../../widgets/Header";
import { Formik } from "formik";
import MyInput from "../../../../shared/ui/MyInput";
import CreateService from "./createServise";
import { tokensDark } from "../../../../app/providers/ThemeProvider";
import { MyStyledButton } from "../../../../shared/ui/style/style";

const CreateRegion = () => {
  const { initialValues, validationSchema, onSubmit, isCreatingRegionStatus } =
    CreateService();
  return (
    <Box>
      <Header title="Добавить регион" />
      <Box>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack>
                <MyInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Ноазвание нового региона"
                  errorMessage={errors.name}
                  error={touched.name && Boolean(errors.name)}
                />

                <MyInput
                  name="position"
                  value={values.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Позиция нового региона"
                  errorMessage={errors.position}
                  error={touched.position && Boolean(errors.position)}
                />
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isCreatingRegionStatus}
                >
                  Добавить
                </MyStyledButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CreateRegion;
