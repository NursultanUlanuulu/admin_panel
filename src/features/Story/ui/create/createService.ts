import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { StatusResponse } from "../../../../shared/enums"
import { createStory } from "../../store/actions"
import { selectCreateStoryStatus } from "../../store/selectors"
import { StoryCrud } from "../../type"
// import { createMainStory } from "../../store/actions";

const CreateService = () => {
  const dispatch = useAppDispatch()

  const isCreatingMainStoryStatus =
    useAppSelector(selectCreateStoryStatus) === StatusResponse.LOADING

  const validationSchema = yup.object().shape({
    main_story: yup.number().required("Обязательное поле"),
    imageFile: yup.mixed().required("Обязательное поле"),
    user_views: yup.array().required("Обязательное поле"),
    video: yup.string().required("Обязательное поле"),
    link: yup.string().required("Обязательное поле"),
    is_active: yup.boolean().required("Обязательное поле"),
  })

  const initialValues: StoryCrud = {
    main_story: 0,
    imageFile: null,
    user_views: [],
    video: "",
    link: "",
    is_active: false,
  }

  const onSubmit = (values: StoryCrud) => {
    dispatch(createStory(values))
  }

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingMainStoryStatus,
  }
}

export default CreateService
