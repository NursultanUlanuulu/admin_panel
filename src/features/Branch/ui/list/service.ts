import { useEffect, useState } from "react"
import { deleteBranch, getBranchList } from "../../store/action"
import {
  selectBranch,
  selectBranchs,
  selectCreateBranchStatus,
  selectDeleteBranchStatus,
  selectGetBranchStatus,
  selectUpdateBranchStatus,
} from "../../store/selectors"
import { Branch } from "../../type"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"
import { Modal } from "@/shared/types"

export const useBranchService = () => {
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    create: false,
    delete: false,
    edit: false,
    info: false,
  })

  const [activeBranch, setActiveBranch] = useState<Branch | null>(null)

  const headerLinks = ["НАЗВАНИЕ", "РЕГИОН", ""]

  const branch = useAppSelector(selectBranch)

  const branchs = useAppSelector(selectBranchs)

  const dispatch = useAppDispatch()

  const getBranchStatus = useAppSelector(selectGetBranchStatus)

  const isCreatingBranchSuccess =
    useAppSelector(selectCreateBranchStatus) === StatusResponse.SUCCESS

  const isUpdateBranchSuccess =
    useAppSelector(selectUpdateBranchStatus) === StatusResponse.SUCCESS

  const isDeleteBranchSuccess =
    useAppSelector(selectDeleteBranchStatus) === StatusResponse.SUCCESS

  const handleModal = (type: Modal) => {
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handleDeleteBranch = () => {
    if (activeBranch) {
      dispatch(deleteBranch(activeBranch.id ?? 0))
    }
  }

  const handleChangeActiveBranch = (branch: Branch) => {
    setActiveBranch(branch)
  }

  useEffect(() => {
    dispatch(getBranchList())
  }, [])

  useEffect(() => {
    if (isCreatingBranchSuccess && modal.create) {
      setModal((prev) => ({ ...prev, create: false }))
    }
  }, [isCreatingBranchSuccess, modal.create])

  useEffect(() => {
    if (isUpdateBranchSuccess && modal.edit) {
      setModal((prev) => ({ ...prev, edit: false }))
    }
  }, [isUpdateBranchSuccess, modal.edit])

  useEffect(() => {
    if (isDeleteBranchSuccess && modal.delete) {
      setModal((prev) => ({ ...prev, delete: false }))
    }
  }, [isDeleteBranchSuccess, modal.delete])

  return {
    headerLinks,
    branch,
    branchs,
    modal,
    activeBranch,
    getBranchStatus,
    handleModal,
    handleDeleteBranch,
    handleChangeActiveBranch,
  }
}
