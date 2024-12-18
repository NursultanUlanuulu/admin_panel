import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { StatusResponse } from "../../../../shared/enums";
import { selectCreateMainStoryStatus } from "../../store/selectors";
import { MainStory } from "../../type";
import { createMainStory } from "../../store/actions";

const CreateService = () => {
  const dispatch = useAppDispatch();

  const isCreatingMainStoryStatus =
    useAppSelector(selectCreateMainStoryStatus) === StatusResponse.LOADING;

  const validationSchema = yup.object().shape({
    imageFile: yup.mixed().required("Обязательное поле"),
    is_active: yup.boolean().required("Обязательное поле"),
  });

  const initialValues: MainStory = {
    imageFile: null,
    is_active: false,
  };

  const onSubmit = async (values: MainStory) => {
    const { imageFile, is_active } = values;
    const formData = new FormData();
    formData.append("imageFile", imageFile!);
    formData.append("is_active", is_active.toString());

    dispatch(createMainStory({ mainStory: values, imageFile }));
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingMainStoryStatus,
  };
};

export default CreateService;
