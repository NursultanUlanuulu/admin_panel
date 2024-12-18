import { useAppDispatch, useAppSelector } from "@/app/store"
import * as yup from "yup"
import { StatusResponse } from "@/shared/enums"
import { DocumentFolder } from "../../type"
import { createDocumentFolder } from "../../store/actions"
import { selectCreateDocumentFolderStatus } from "../../store/selectors"

export const CreateService = () => {
  const dispatch = useAppDispatch()

  const isCreatingDocumentStatus =
    useAppSelector(selectCreateDocumentFolderStatus) === StatusResponse.LOADING

  const validationSchema = yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    imageFile: yup.mixed().required("Обязательное поле"),
    position: yup
      .number()
      .required("Обязательное поле")
      .positive("Должно быть положительным")
      .integer("Должно быть целым числом"),
  })

  const initialValues: DocumentFolder = {
    id: 0,
    name: "",
    image: "",
    imageFile: undefined,
    position: 0,
  }

  const onSubmit = (values: DocumentFolder) => {
    dispatch(createDocumentFolder(values))
  }
  return {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingDocumentStatus,
  }
}
