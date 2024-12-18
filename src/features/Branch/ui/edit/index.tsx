import { Branch } from "../../type"
import { Box, Stack } from "@mui/material"
import { Formik } from "formik"
import { WorkTimeForm } from "../create/WorkTimeForm"
import { EditBranchServise } from "./EditBranchServise"
import MySelect from "@/shared/ui/MySelect"
import { Header } from "@/widgets"
import { MyInput } from "@/shared/ui"
import { tokensDark } from "@/app/providers/ThemeProvider"
import { MyEditButton } from "@/shared/ui/style/style"
import { Param } from "@/shared/types"

export const BranchEdit = ({ branch }: { branch: Branch }) => {
  const { initialValues, validationShema, onSubmit, regions } =
    EditBranchServise(branch)

  const transformedOptions = regions.map((item: Param) => ({
    value: item.id,
    label: item.name,
  }))
  return (
    <Box>
      <Header title="Редактирование филиала" />
      <Box>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationShema}
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
                <WorkTimeForm />
                <MySelect
                  name="region"
                  value={values.region}
                  labelName="Выберите регион"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={transformedOptions}
                  size="small"
                  errorMessage={errors.region}
                  error={touched.region && Boolean(errors.region)}
                />
                <MyInput
                  name="region"
                  value={values.region}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Регион"
                  disabled={true}
                  errorMessage={errors.region}
                  error={touched.region && Boolean(errors.region)}
                />
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

                <MyEditButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                >
                  Изменить
                </MyEditButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}
