import { useEffect, useState } from "react"
import {
  selectDocumentFolderId,
  selectUpdateDocumentFolderStatus,
} from "../../store/selectors"
import { DocumentFolder } from "../../type"
import { useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"

type Modal = "delete" | "edit"

export const InfoService = () => {
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    delete: false,
    edit: false,
  })

  const [activeDocument] = useState<DocumentFolder | null>(null)

  const detail = useAppSelector(selectDocumentFolderId)

  const isUpdateDocumentFolderSuccess =
    useAppSelector(selectUpdateDocumentFolderStatus) === StatusResponse.SUCCESS

  useEffect(() => {
    if (isUpdateDocumentFolderSuccess && modal.edit) {
      setModal({ ...modal, edit: false })
    }
  }, [isUpdateDocumentFolderSuccess])

  const handleModal = (type: Modal) => {
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  return {
    modal,
    detail,
    activeDocument,
    handleModal,
  }
}
