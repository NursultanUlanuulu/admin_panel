import { useEffect, useState } from "react"
import { selectUpdateBranchStatus } from "../../store/selectors"
import { Branch } from "../../type"
import { useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"
import { Modal } from "@/shared/types"

export const InfoService = () => {
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    delete: false,
    edit: false,
  })

  const [activeBranch, setActiveBranch] = useState<Branch | null>(null)

  const isUpdateBranchSuccess =
    useAppSelector(selectUpdateBranchStatus) === StatusResponse.SUCCESS

  /// update
  useEffect(() => {
    if (isUpdateBranchSuccess && modal.edit) {
      setModal((prev) => ({ ...prev, edit: false }))
    }
  }, [isUpdateBranchSuccess])

  const handleModal = (type: Modal, branch?: Branch) => {
    if (type === "edit" && branch) {
      setActiveBranch(branch)
    }
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  return {
    modal,
    activeBranch,
    handleModal,
  }
}
