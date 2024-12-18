import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { StatusResponse } from "../../../../shared/enums";
import { selectCreateRegionStatus } from "../../store/selectors";
import * as yup from "yup";
import { Region } from "../../type";
import { createRegion } from "../../store/actions";
const CreateService = () => {
  const dispatch = useAppDispatch();

  const isCreatingRegionStatus =
    useAppSelector(selectCreateRegionStatus) === StatusResponse.LOADING;

  const validationSchema = yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    position: yup.number().required("Обязательное поле"),
  });

  const initialValues: Region = {
    name: "",
    position: 0,
  };
  const onSubmit = (values: Region) => {
    dispatch(createRegion(values));
  };
  return {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingRegionStatus,
  };
};

export default  CreateService;
