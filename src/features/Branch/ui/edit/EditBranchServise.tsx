import * as yup from "yup"
import { Branch } from "../../type"
import { updateBranch } from "../../store/action"
import { selectRegion } from "@/features/Region/store/selectors"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { useEffect } from "react"
import { getRegions } from "@/features/Region/store/actions"

export const EditBranchServise = (branch: Branch) => {
  const dispatch = useAppDispatch()

  const regions = useAppSelector(selectRegion)

  const validationShema = yup.object().shape({
    name: yup.string(),
    address: yup.string(),
    region: yup.number(),
    work_time: yup.array().of(
      yup.object().shape({
        start_time: yup.string(),
        end_time: yup.string(),
      }),
    ),
    lat: yup.number(),
    long: yup.number(),
    position: yup.number(),
  })

  const initialValues: Branch = {
    id: branch.id,
    name: branch.name,
    address: branch.address,
    work_time: branch.work_time,
    region: branch.region,
    lat: branch.lat,
    long: branch.long,
    position: branch.position,
  }

  const onSubmit = (values: Branch) => {
    dispatch(updateBranch({ ...values, id: branch.id }))
  }
  useEffect(() => {
    dispatch(getRegions())
  }, [dispatch])

  return {
    initialValues,
    validationShema,
    onSubmit,
    regions,
  }
}
