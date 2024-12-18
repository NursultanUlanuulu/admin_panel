import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { StatusResponse } from "../../../../shared/enums";
import * as yup from "yup";
import { selectUpdateMainStoryStatus } from "../../store/selectors";
import { MainStory } from "../../type";
import { updateMainStory } from "../../store/actions";
export const EditService = (mainStory: MainStory) => {
  const isEditDocument =
    useAppSelector(selectUpdateMainStoryStatus) === StatusResponse.LOADING;

  const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    is_active: yup.boolean().required("Обязательное поле"),
  });

  const initialValues: MainStory = {
    is_active: mainStory.is_active,
  };

  const onSubmit = (values: MainStory) => {
    dispatch(updateMainStory(values));
  };
  return {
    initialValues,
    validationSchema,
    isEditDocument,
    onSubmit,
  };
};
