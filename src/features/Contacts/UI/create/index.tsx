import { Formik } from "formik"
import Header from "../../../../widgets/Header"
import createService from "./createServise"
import { Box, Button, Stack, styled } from "@mui/material"
import MyInput from "../../../../shared/ui/MyInput"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import MySelect from "@/shared/ui/MySelect"
import { MyFileInput } from "@/shared/ui"
import { MSelect } from "@/shared/ui/Select"

const CreateContact = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingContactStatus,
    typeOptions,
  } = createService()
  return (
    <Box>
      <Header title="Добавить контакт" />
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
              <Stack direction="column" spacing={2}>
                <MyInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Имя"
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
                <MSelect
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={typeOptions}
                  labelName="Тип"
                  errorMessage={errors.type}
                  error={touched.type && Boolean(errors.type)}
                />
                <MyInput
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Контакт"
                  errorMessage={errors.contact}
                  error={touched.contact && Boolean(errors.contact)}
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
                  disabled={isCreatingContactStatus}
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

export default CreateContact

const MyStyledButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#f58d15",
    // textDecoration: "none",
  },
})
