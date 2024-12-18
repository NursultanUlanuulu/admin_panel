import { Box, Stack } from "@mui/material";
import { tokensDark } from "../../../../app/providers/ThemeProvider";
import { MyStyledButton } from "../../../../shared/ui/style/style";
import Header from "../../../../widgets/Header";
import { Formik } from "formik";
import { MainStory } from "../../type";
import MyCheckbox from "../../../../shared/ui/MyCheckbox";
import { EditService } from "./EditServise";

const MainStoryEdit = ({ mainStory }: { mainStory: MainStory }) => {
  const { initialValues, validationSchema, isEditDocument, onSubmit } =
    EditService(mainStory);
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
                <MyCheckbox
                  name="is_active"
                  value={values.is_active}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Строиз активен?"
                  errorMessage={errors.is_active}
                  error={touched.is_active && Boolean(errors.is_active)}
                />
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isEditDocument}
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

export default MainStoryEdit;
