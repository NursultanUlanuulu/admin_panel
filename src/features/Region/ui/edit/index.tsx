import { Box, Stack } from "@mui/material"
import { Formik } from "formik"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import MyInput from "../../../../shared/ui/MyInput"
import { MyStyledButton } from "../../../../shared/ui/style/style"
import Header from "../../../../widgets/Header"
import { Region } from "../../type"
import { EditServise } from "./editServise"

export const EditRegion = ({ region }: { region: Region }) => {
  const { initialValues, validationSchema, isEditRegionLoading, onSubmit } =
    EditServise(region)
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
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={2}>
                <MyInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Название"
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
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isEditRegionLoading}
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
