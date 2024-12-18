import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"
import {
  selectDeleteRegionStatus,
  selectRegionDetail,
  selectUpdateRegionStatus,
} from "../../store/selectors"
import { deleteRegion } from "../../store/actions"

type Modal = "delete" | "edit"

const InfoService = () => {
  const [modal, setModal] = useState<{ [key: string]: boolean }>({
    delete: false,
    edit: false,
  })

  const dispatch = useAppDispatch()

  const detail = useAppSelector(selectRegionDetail)

  const isUpdateRegionSuccess =
    useAppSelector(selectUpdateRegionStatus) === StatusResponse.SUCCESS

  const isDelateRegionSuccess =
    useAppSelector(selectDeleteRegionStatus) === StatusResponse.SUCCESS

  useEffect(() => {
    if (isUpdateRegionSuccess && modal.edit) {
      setModal({ ...modal, edit: false })
    }
  }, [isUpdateRegionSuccess])

  useEffect(() => {
    if (isDelateRegionSuccess && modal.delete) {
      setModal({ ...modal, delete: false })
    }
  }, [isDelateRegionSuccess])

  const handleModal = (type: Modal) => {
    setModal((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  const handleDeleteRegion = () => {
    if (detail) {
      dispatch(deleteRegion(detail.id))
    }
  }

  return {
    modal,
    detail,
    handleModal,
    handleDeleteRegion,
  }
}

export default InfoService
