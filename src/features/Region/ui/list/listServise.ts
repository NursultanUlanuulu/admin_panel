import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { StatusResponse } from "../../../../shared/enums"
import {
  selectCreateRegionStatus,
  selectDeleteRegionStatus,
  selectGetRegionStatus,
  selectRegion,
  selectRegionDetail,
  selectUpdateRegionStatus,
} from "../../store/selectors"
import { deleteRegion, getRegions } from "../../store/actions"
import { Region } from "../../type"

type Modal = "delete" | "create" | "edit" | "detail"

const RegionListServise = () => {
  const [modal, setModal] = useState<{
    [key: string]: boolean
  }>({
    delete: false,
    info: false,
    edit: false,
    detail: false,
  })

  const [activeRegion, setActiveRegion] = useState({} as Region)

  const headerLinks = ["ПОЗИЦИЯ", "НАЗВАНИЕ", ""]

  const region = useAppSelector(selectRegion)

  const detail = useAppSelector(selectRegionDetail)

  const dispatch = useAppDispatch()

  const getRegionStatus = useAppSelector(selectGetRegionStatus)

  const isCreatingRegionSuccess =
    useAppSelector(selectCreateRegionStatus) === StatusResponse.SUCCESS

  const isUpdateRegionSuccess =
    useAppSelector(selectUpdateRegionStatus) === StatusResponse.SUCCESS

  const isDelateRegionSuccess =
    useAppSelector(selectDeleteRegionStatus) === StatusResponse.SUCCESS

  ////get
  useEffect(() => {
    dispatch(getRegions())
  }, [])

  ///create
  useEffect(() => {
    if (isCreatingRegionSuccess && modal.create) {
      setModal({ ...modal, create: false })
    }
  }, [isCreatingRegionSuccess])

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

  //   useEffect(() => {
  //     if ((isUpdateRegionSuccess || isDelateRegionSuccess) && modal.info) {
  //       setModal({ ...modal, info: false });
  //     }
  //   }, [isUpdateRegionSuccess, isDelateRegionSuccess]);

  const handleModal = (type: Modal) => {
    setModal({ ...modal, [type]: !modal[type] })
  }

  const handleDeleteRegion = () => {
    dispatch(deleteRegion(activeRegion.id ?? 0))
  }

  const handleChangeActiveRegion = (region: Region) => {
    setActiveRegion(region)
  }
  return {
    headerLinks,
    region,
    detail,
    modal,
    activeRegion,
    getRegionStatus,
    handleModal,
    handleDeleteRegion,
    handleChangeActiveRegion,
  }
}

export default RegionListServise
