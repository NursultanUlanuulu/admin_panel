import { Box, Stack } from "@mui/material"
import { Formik } from "formik"
import { tokensDark } from "../../../../app/providers/ThemeProvider"
import MyCheckbox from "../../../../shared/ui/MyCheckbox"
import MyInput from "../../../../shared/ui/MyInput"
import { MyStyledButton } from "../../../../shared/ui/style/style"
import Header from "../../../../widgets/Header"
import Create from "../../../MainStory/ui/list/listService"
import CreateService from "./createService"

export default function CreateStory() {
  // const dispatch = useAppDispatch()
  // const [mainStories, setMainStories] = useState<MainStory[]>([])
  // const [selectedMainStory, setSelectedMainStory] = useState<string>('')
  // useEffect(() => {
  // 	dispatch(getMainStory())
  // }, [])
  const {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingMainStoryStatus,
  } = CreateService()

  const { mainStory } = Create()
  console.log(mainStory)

  return (
    <Box>
      <Header title="Добавить сторис" />
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
                <select
                  // name='main_story'
                  // value={selectedMainStory}
                  // onChange={e => setSelectedMainStory(e.target.value)}
                  className="mb-10"
                >
                  <option value="">Выберите главный сторис</option>
                  {mainStory.map((story) => (
                    <option key={story.id} value={story.id}>
                      {story.image}
                    </option>
                  ))}
                </select>
                <input
                  type="file"
                  name="imageFile"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0]
                    if (file) {
                      setFieldValue("imageFile", file)
                    }
                  }}
                  onBlur={handleBlur}
                  accept="image/*,.png,.jpg,.gif,.web"
                />
                <MyInput
                  name="link"
                  value={values.link}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Ссылка"
                  errorMessage={errors.link}
                  error={touched.link && Boolean(errors.link)}
                />
                <MyCheckbox
                  name="is_active"
                  value={values.is_active}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelName="Строриз активен?"
                  errorMessage={errors.is_active}
                  error={touched.is_active && Boolean(errors.is_active)}
                />
                <MyStyledButton
                  sx={{ background: tokensDark.greenAccent[600] }}
                  variant="contained"
                  type="submit"
                  disabled={isCreatingMainStoryStatus}
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
