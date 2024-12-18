import { Box, Stack } from "@mui/material"
import { CreateService } from "./createService"
import { Formik } from "formik"
import { MyFileInput, MyInput } from "@/shared/ui"
import { MyStyledButton } from "@/shared/ui/style/style"
import { tokensDark } from "@/app/providers/ThemeProvider"
import { Header } from "@/widgets"

export const DocumentCreate = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingDocumentStatus,
  } = CreateService()
  return (
    <Box>
      <Header title="Добавить папку" />
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
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack>
                <MyInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Ноазвание новой папки"
                  errorMessage={errors.name}
                  error={touched.name && Boolean(errors.name)}
                />

                <MyInput
                  name="position"
                  value={values.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Позиция новой папки"
                  errorMessage={errors.position}
                  error={touched.position && Boolean(errors.position)}
                />
                <MyFileInput
                  name="imageFile"
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isCreatingDocumentStatus}
                >
                  Добавить
                </MyStyledButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}
