import { Box, Stack } from "@mui/material"
import { EditService } from "./editService"
import { Formik } from "formik"
import { Document } from "../../type"
import MySelect from "@/shared/ui/MySelect"
import { Header } from "@/widgets"
import { MyInput } from "@/shared/ui"
import { MyStyledButton } from "@/shared/ui/style/style"
import { tokensDark } from "@/app/providers/ThemeProvider"
import { Param } from "@/shared/types"

export const DocumentEdit = ({ document }: { document: Document }) => {
  const { initialValues, validationSchema, folder, onSubmit } =
    EditService(document)

  const transformedOptions = folder.map((item: Param) => ({
    value: item.id,
    label: item.name,
  }))
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
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Описание"
                  errorMessage={errors.text}
                  error={touched.text && Boolean(errors.text)}
                />
                <MySelect
                  labelName="Выберите папку"
                  name="document_folder"
                  options={transformedOptions}
                  value={values.document_folder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={errors.document_folder}
                  error={touched.text && Boolean(errors.text)}
                  helperText={errors.document_folder}
                  size="small"
                />
                <MyInput
                  name="document_folder"
                  value={values.document_folder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={true}
                  labelName="Папка"
                  errorMessage={errors.document_folder}
                  error={
                    touched.document_folder && Boolean(errors.document_folder)
                  }
                />
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
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
