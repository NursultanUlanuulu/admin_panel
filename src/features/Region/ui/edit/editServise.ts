import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { StatusResponse } from "../../../../shared/enums";
import { selectUpdateRegionStatus } from "../../store/selectors";
import * as yup from "yup";
import { Region } from "../../type";
import { updateRegion } from "../../store/actions";
export const EditServise = (region: Region) => {
  const isEditRegionLoading =
    useAppSelector(selectUpdateRegionStatus) === StatusResponse.LOADING;

  const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    name: yup.string().required("Объязательное поле"),
    position: yup.number().required("Обязательное поле"),
  });

  const initialValues: Region = {
    id: region.id,
    name: region.name,
    position: region.position,
  };

  const onSubmit = (values: Region) => {
    dispatch(updateRegion(values));
  };
  return {
    initialValues,
    validationSchema,
    isEditRegionLoading,
    onSubmit,
  };
};
