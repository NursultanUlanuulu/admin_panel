import { useEffect, useState } from "react"
import {
  deleteDocumentFolder,
  getDocumentFolderList,
} from "../../store/actions"
import {
  selectCreateDocumentFolderStatus,
  selectDeleteDocumentFolderStatus,
  selectDocumentFolderId,
  selectDocumentFolders,
  selectGetDocumentFolderStatus,
} from "../../store/selectors"
import { DocumentFolder } from "../../type"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"

type Modal = "delete" | "create" | "edit" | "detail"

export const DocumentFolderService = () => {
  const [modal, setModal] = useState<{
    [key: string]: boolean
  }>({
    delete: false,
    info: false,
    edit: false,
    detail: false,
  })

  const [activeDocumentFolder, setActiveDocumentFolder] = useState(
    {} as DocumentFolder,
  )

  const headerLinks = ["ПОЗИЦИЯ", "ИЗОБРАЖЕНЕИЕ", "НАЗВАНИЕ", ""]

  const documentFolfers = useAppSelector(selectDocumentFolders)

  const documentFolferInfo = useAppSelector(selectDocumentFolderId)

  const dispatch = useAppDispatch()

  const getDocumentFolderStatus = useAppSelector(selectGetDocumentFolderStatus)

  const isCreatingDocumentFolderSuccess =
    useAppSelector(selectCreateDocumentFolderStatus) === StatusResponse.SUCCESS

  const isDelateDocumentFolderSuccess =
    useAppSelector(selectDeleteDocumentFolderStatus) === StatusResponse.SUCCESS

  const handleDeleteDocumentFolder = () => {
    dispatch(deleteDocumentFolder(activeDocumentFolder.id ?? 0))
  }

  const handleModal = (type: Modal) => {
    setModal({ ...modal, [type]: !modal[type] })
  }

  const handleChangeActiveDocument = (documentFolder: DocumentFolder) => {
    setActiveDocumentFolder(documentFolder)
  }

  ///get all
  useEffect(() => {
    dispatch(getDocumentFolderList())
  }, [])

  ///create
  useEffect(() => {
    if (isCreatingDocumentFolderSuccess && modal.create) {
      setModal({ ...modal, create: false })
    }
  }, [isCreatingDocumentFolderSuccess])

  useEffect(() => {
    if (isDelateDocumentFolderSuccess && modal.delete) {
      setModal({ ...modal, delete: false })
    }
  }, [isDelateDocumentFolderSuccess])

  return {
    headerLinks,
    documentFolfers,
    documentFolferInfo,
    modal,
    activeDocumentFolder,
    getDocumentFolderStatus,
    handleModal,
    handleDeleteDocumentFolder,
    handleChangeActiveDocument,
  }
}
