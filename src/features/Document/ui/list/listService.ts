import { useEffect, useState } from "react"
import { Document } from "../../type"
import {
  selectCreateDocumentStatus,
  selectDeleteDocumentStatus,
  selectDocument,
  selectDocumentId,
  selectGetDocumentStatus,
} from "../../store/selectors"
import { deleteDocument, getDocumentList } from "../../store/actions"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"

type Modal = "delete" | "create" | "edit" | "info"

export const ListService = () => {
  const [modal, setModal] = useState<{
    [key: string]: boolean
  }>({
    create: false,
    delete: false,
    edit: false,
    info: false,
  })

  const [activeDocument, setActiveDocument] = useState<Document | null>(null)

  const headerLinks = ["Номер-ID папки", "НАЗВАНИЕ", "ОПИСАНИЕ", ""]

  const document = useAppSelector(selectDocument)

  const detail = useAppSelector(selectDocumentId)

  const dispatch = useAppDispatch()

  const getDocumentStatus = useAppSelector(selectGetDocumentStatus)

  const isCreatingDocumentSuccess =
    useAppSelector(selectCreateDocumentStatus) === StatusResponse.SUCCESS

  const isDelateDocumentSuccess =
    useAppSelector(selectDeleteDocumentStatus) === StatusResponse.SUCCESS

  const handleModal = (type: Modal) => {
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handleDeleteDocument = () => {
    if (activeDocument) {
      dispatch(deleteDocument(activeDocument.id ?? 0))
    }
  }

  const handleChangeActiveDocument = (document: Document) => {
    setActiveDocument(document)
  }

  useEffect(() => {
    dispatch(getDocumentList())
  }, [])

  useEffect(() => {
    if (isCreatingDocumentSuccess && modal.create) {
      setModal({ ...modal, create: false })
    }
  }, [isCreatingDocumentSuccess])

  useEffect(() => {
    if (isDelateDocumentSuccess && modal.delete) {
      setModal({ ...modal, delete: false })
    }
  }, [isDelateDocumentSuccess])

  return {
    headerLinks,
    document,
    modal,
    activeDocument,
    getDocumentStatus,
    detail,
    handleModal,
    handleDeleteDocument,
    handleChangeActiveDocument,
  }
}
