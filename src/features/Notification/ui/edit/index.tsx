import { Notification } from "../../type";
import { Box, Stack } from "@mui/material";
import Header from "../../../../widgets/Header";
import { Formik } from "formik";
import MyInput from "../../../../shared/ui/MyInput";
import { tokensDark } from "../../../../app/providers/ThemeProvider";
import { MyStyledButton } from "../../../../shared/ui/style/style";
import EditServise from "./editService";
import MyCheckbox from "../../../../shared/ui/MyCheckbox";

const EditNotification = ({ notification }: { notification: Notification }) => {
  const {
    initialValues,
    validationSchema,
    isEditNotificationLoading,
    onSubmit,
  } = EditServise(notification);
  console.log(initialValues);

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
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Сообщение"
                  errorMessage={errors.message}
                  error={touched.message && Boolean(errors.message)}
                />
                <MyInput
                  name="user"
                  type="number"
                  value={values.user}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Пользователь"
                  errorMessage={errors.user?.id}
                  error={touched.user?.id && Boolean(errors.user?.id)}
                />
                <MyCheckbox
                  name="is_read"
                  value={values.is_read}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Прочитано?"
                />
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isEditNotificationLoading}
                >
                  Изменить
                </MyStyledButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default EditNotification;
