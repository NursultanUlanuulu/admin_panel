import * as yup from "yup"
import {
  partiallyUpdateDocumentFolder,
  updateDocumentFolder,
} from "../../store/actions"
import { DocumentFolder } from "../../type"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectUpdateDocumentFolderStatus } from "../../store/selectors"
import { StatusResponse } from "@/shared/enums"

export const EditService = (folder: DocumentFolder) => {
  const dispatch = useAppDispatch()

  const isEditDocumentFolder =
    useAppSelector(selectUpdateDocumentFolderStatus) === StatusResponse.LOADING

  const validationSchema = yup.object().shape({
    name: yup.string(),
    image: yup.mixed(),
    position: yup
      .number()
      .positive("Должно быть положительным")
      .integer("Должно быть целым числом"),
  })

  const initialValues: DocumentFolder = {
    id: folder.id,
    name: folder.name,
    imageFile: folder.imageFile,
    position: folder.position,
  }

  const onSubmit = (values: DocumentFolder) => {
    dispatch(updateDocumentFolder({ ...values, id: folder.id }))
    dispatch(partiallyUpdateDocumentFolder({ ...values, id: folder.id }))
  }
  return {
    initialValues,
    validationSchema,
    isEditDocumentFolder,
    onSubmit,
  }
}
