// import { useAppDispatch, useAppSelector } from "../../../../app/store";
// import { StatusResponse } from "../../../../shared/enums";
// import * as yup from "yup";
// import { Notification } from "../../type";
// import { selectUpdateNotificationStatus } from "../../store/selectors";
// import { updateNotification } from "../../store/actions";
//  const EditServise = (notification: Notification) => {
//   const isEditNotificationLoading =
//     useAppSelector(selectUpdateNotificationStatus) === StatusResponse.LOADING;

//   const dispatch = useAppDispatch();

//   const validationSchema = yup.object().shape({
//     message: yup.string().required("Обязательное поле"),
//     is_read: yup.boolean().required("Обязательное поле"),
//     user_id: yup.number().required("Обязательное поле"),
//   });

//   const initialValues: Notification = {
//     id: notification.id,
//     message: notification.message,
//     is_read: notification.is_read,
//     user_id: notification.user.id,
//   };

//   const onSubmit = (values: Notification) => {
//     dispatch(updateNotification(values));
//   };
//   return {
//     initialValues,
//     validationSchema,
//     isEditNotificationLoading,
//     onSubmit,
//   };
// };
// export default EditServise
import { useAppDispatch, useAppSelector } from "../../../../app/store";
import { StatusResponse } from "../../../../shared/enums";
import * as yup from "yup";
import { Notification } from "../../type";
import { selectUpdateNotificationStatus } from "../../store/selectors";
import { updateNotification } from "../../store/actions";

const EditService = (notification: Notification) => {
  const isEditNotificationLoading =
    useAppSelector(selectUpdateNotificationStatus) === StatusResponse.LOADING;

  const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    message: yup.string().required("Обязательное поле"),
    is_read: yup.boolean().required("Обязательное поле"),
    user: yup.number().required("Обязательное поле"),
  });

  const initialValues: Notification = {
    id: notification.id,
    message: notification.message,
    is_read: notification.is_read,
    user: notification.user.id,
    created_at: notification.created_at,
  };

  const onSubmit = (values: Notification) => {
    dispatch(updateNotification(values));
  };

  return {
    initialValues,
    validationSchema,
    isEditNotificationLoading,
    onSubmit,
  };
};

export default EditService;
