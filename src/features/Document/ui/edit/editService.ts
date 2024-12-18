import { selectDocumentFolders } from "@/features/DocumentsFolders/store/selectors"
import { Document } from "../../type"
import * as yup from "yup"
import { updateDocument } from "../../store/actions"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { getDocumentFolderList } from "@/features/DocumentsFolders/store/actions"
import { useEffect } from "react"

export const EditService = (document: Document) => {
  const dispatch = useAppDispatch()

  const folder = useAppSelector(selectDocumentFolders)

  const validationSchema = yup.object().shape({
    name: yup.string(),
    text: yup.string(),
    document_folder: yup.number(),
  })

  const initialValues: Document = {
    id: document.id,
    name: document.name,
    text: document.text,
    document_folder: document.document_folder,
  }

  const onSubmit = (values: Document) => {
    dispatch(updateDocument(values))
    // dispatch(partiallyUpdateDocument(values))
  }

  useEffect(() => {
    dispatch(getDocumentFolderList())
  }, [dispatch])

  return {
    initialValues,
    validationSchema,
    onSubmit,
    folder,
  }
}
