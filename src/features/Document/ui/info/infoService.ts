import { useEffect, useState } from "react"
import { Document } from "../../type"
import { StatusResponse } from "@/shared/enums"
import { useAppSelector } from "@/app/store"
import { selectUpdateDocumentStatus } from "../../store/selectors"
import { Modal } from "@/shared/types"

export const InfoService = () => {
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    delete: false,
    edit: false,
  })

  const [activeDocument] = useState<Document | null>(null)

  const isUpdateDocumentSuccess =
    useAppSelector(selectUpdateDocumentStatus) === StatusResponse.SUCCESS

  useEffect(() => {
    if (isUpdateDocumentSuccess && modal.edit) {
      setModal({ ...modal, edit: false })
    }
  }, [isUpdateDocumentSuccess])

  const handleModal = (type: Modal) => {
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  return {
    modal,
    activeDocument,
    handleModal,
  }
}
