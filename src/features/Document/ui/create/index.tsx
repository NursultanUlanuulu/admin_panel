import { Box, Stack } from "@mui/material"
import { CreateService } from "./createService"
import { Formik } from "formik"
import { MyInput } from "@/shared/ui"
import { MyCreateButton } from "@/shared/ui/style/style"
import { tokensDark } from "@/app/providers/ThemeProvider"
import { Header } from "@/widgets"
import MySelect from "@/shared/ui/MySelect"
import { Param } from "@/shared/types"

export const DocumentCreate = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingDocumentStatus,
    folder,
  } = CreateService()
  const transformedOptions = folder.map((item: Param) => ({
    value: item.id,
    label: item.name,
  }))

  return (
    <Box>
      <Header title="Добавить документ" />
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
                  labelName="Ноазвание нового документа"
                  errorMessage={errors.name}
                  error={touched.name && Boolean(errors.name)}
                />
                <MyInput
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Описание нового документа"
                  errorMessage={errors.text}
                  error={touched.text && Boolean(errors.text)}
                />
                <MySelect
                  labelName="Выберите папку"
                  name="document_folder"
                  options={transformedOptions}
                  value={values.document_folder}
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={errors.document_folder}
                  error={touched.text && Boolean(errors.text)}
                  helperText={errors.document_folder}
                />
                <MyCreateButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isCreatingDocumentStatus}
                >
                  Добавить
                </MyCreateButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}
