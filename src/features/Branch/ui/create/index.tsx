import { CreateServise } from "./servise"
import { Box, Stack } from "@mui/material"
import { Formik } from "formik"
import { WorkTimeForm } from "./WorkTimeForm"
import MySelect from "@/shared/ui/MySelect"
import { MyCreateButton } from "@/shared/ui/style/style"
import { Header } from "@/widgets"
import { MyInput } from "@/shared/ui"
import { tokensDark } from "@/app/providers/ThemeProvider"
import { Param } from "@/shared/types"

export const CreateBranch = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingBranchStatus,
    regions,
  } = CreateServise()

  const transformedOptions = regions.map((item: Param) => ({
    value: item.id,
    label: item.name,
  }))
  return (
    <Box>
      <Header title="Добавить филиал" />
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
              <Stack direction="column" spacing={2}>
                <MyInput
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Название нового филиала"
                  errorMessage={errors.name}
                  error={touched.name && Boolean(errors.name)}
                />
                <MyInput
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Адресс"
                  errorMessage={errors.address}
                  error={touched.address && Boolean(errors.address)}
                />
                <MySelect
                  name="region"
                  value={values.region}
                  labelName="Выберите регион"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={transformedOptions}
                  errorMessage={errors.region}
                  error={touched.region && Boolean(errors.region)}
                />
                <MyInput
                  name="region"
                  value={values.region}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={true}
                  labelName="Регион"
                  errorMessage={errors.region}
                  error={touched.region && Boolean(errors.region)}
                />
                <WorkTimeForm />
                <MyInput
                  name="lat"
                  value={values.lat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Широта"
                  errorMessage={errors.lat}
                  error={touched.lat && Boolean(errors.lat)}
                />
                <MyInput
                  name="long"
                  value={values.long}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Долгота"
                  errorMessage={errors.long}
                  error={touched.long && Boolean(errors.long)}
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
                <MyCreateButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isCreatingBranchStatus}
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
