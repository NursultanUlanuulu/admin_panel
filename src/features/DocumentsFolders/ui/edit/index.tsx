import { Box, Stack } from "@mui/material"
import { DocumentFolder } from "../../type"
import { EditService } from "./editService"
import { Formik } from "formik"
import { MyStyledButton } from "@/shared/ui/style/style"
import { MyFileInput, MyInput } from "@/shared/ui"
import { Header } from "@/widgets"
import { tokensDark } from "@/app/providers/ThemeProvider"

export const DocumentEdit = ({ folder }: { folder: DocumentFolder }) => {
  const { initialValues, validationSchema, isEditDocumentFolder, onSubmit } =
    EditService(folder)
  return (
    <Box>
      <Header title="Редактирование" />
      <Box>
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
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
              <Stack direction="column" spacing={2}>
                <MyInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Название папки"
                  errorMessage={errors.name}
                  error={touched.name && Boolean(errors.name)}
                />
                <MyInput
                  name="position"
                  value={values.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Позиция"
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
                  disabled={isEditDocumentFolder}
                >
                  Изменить
                </MyStyledButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}
