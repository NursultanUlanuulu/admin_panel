import * as yup from "yup"
import { selectCreateDocumentStatus } from "../../store/selectors"
import { Document } from "../../type"
import { createDocument } from "../../store/actions"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { selectDocumentFolders } from "@/features/DocumentsFolders/store/selectors"
import { getDocumentFolderList } from "@/features/DocumentsFolders/store/actions"
import { useEffect } from "react"
import { StatusResponse } from "@/shared/enums"

export const CreateService = () => {
  const dispatch = useAppDispatch()

  const folder = useAppSelector(selectDocumentFolders)

  const isCreatingDocumentStatus =
    useAppSelector(selectCreateDocumentStatus) === StatusResponse.LOADING

  const validationSchema = yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    text: yup.string().required("Обязательное поле"),
    document_folder: yup.number().required("Обязательное поле"),
  })

  const initialValues: Document = {
    id: 0,
    name: "",
    text: "",
    document_folder: 0,
  }

  const onSubmit = (values: Document) => {
    dispatch(createDocument(values))
  }

  useEffect(() => {
    dispatch(getDocumentFolderList())
  }, [dispatch])

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isCreatingDocumentStatus,
    folder,
  }
}
