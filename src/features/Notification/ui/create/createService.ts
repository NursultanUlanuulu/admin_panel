// import { useAppDispatch, useAppSelector } from "../../../../app/store";
// import { StatusResponse } from "../../../../shared/enums";
// import * as yup from "yup";
// import { selectCreateNotificationStatus } from "../../store/selectors";
// import { createNotification } from "../../store/actions";
// import { Notification } from "../../type";
// const CreateService = () => {
//   const dispatch = useAppDispatch();

//   const isCreatingNotificationStatus =
//     useAppSelector(selectCreateNotificationStatus) === StatusResponse.LOADING;

//   const validationSchema = yup.object().shape({
//     message: yup.string().required("Обязательное поле"),
//     is_read: yup.boolean().required("Обязательное поле"),
//     user: yup.number().required("Обязательное поле")
//   });

//   const initialValues: Notification = {
//     message: "",
//     is_read: true,
//     user:0,
//   };
//   const onSubmit = (values: Notification) => {
//     dispatch(createNotification(values));
//   };
//   return {
//     initialValues,
//     validationSchema,
//     onSubmit,
//     isCreatingNotificationStatus,
//   };
// };

// export default CreateService;
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { StatusResponse } from "../../../../shared/enums";
import * as yup from "yup";
import { selectCreateNotificationStatus } from "../../store/selectors";
import { createNotification } from "../../store/actions";
import { Notification } from "../../type";

const CreateService = () => {
  const dispatch = useAppDispatch();

  const isCreatingNotificationStatus =
    useAppSelector(selectCreateNotificationStatus) === StatusResponse.LOADING;

  const validationSchema = yup.object().shape({
    message: yup.string().required("Обязательное поле"),
    is_read: yup.boolean().required("Обязательное поле"),
    user_id: yup.number().required("Обязательное поле"),
  });

  const initialValues: Notification = {
    message: "",
    is_read: false,
    user_id: 0,
  };
  // console.log(initialValues);

  const onSubmit = (values: Notification) => {
    dispatch(createNotification(values));
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingNotificationStatus,
  };
};

export default CreateService;
