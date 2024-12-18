import { selectCreateBranchStatus } from "../../store/selectors"
import * as yup from "yup"
import { Branch } from "../../type"
import { createBranch } from "../../store/action"
import { selectRegion } from "@/features/Region/store/selectors"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { StatusResponse } from "@/shared/enums"
import { useEffect } from "react"
import { getRegions } from "@/features/Region/store/actions"

export const CreateServise = () => {
  const dispatch = useAppDispatch()

  const isCreatingBranchStatus =
    useAppSelector(selectCreateBranchStatus) === StatusResponse.LOADING

  const regions = useAppSelector(selectRegion)

  const validationSchema = yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    address: yup.string().required("Обязательное поле"),
    work_time: yup.array().of(
      yup.object().shape({
        end_time: yup.string().required("Обязательное поле"),
        start_time: yup.string().required("Обязательное поле"),
      }),
    ),
    lat: yup.number().required("Обязательное поле"),
    long: yup.number().required("Обязательное поле"),
    position: yup.number().required("Обязательное поле"),
    region: yup.number().nullable(),
  })

  const initialValues: Branch = {
    id: 0,
    name: "",
    address: "",
    work_time: [
      { end_time: "", start_time: "" },
      { end_time: "", start_time: "" },
      { end_time: "", start_time: "" },
      { end_time: "", start_time: "" },
      { end_time: "", start_time: "" },
      { end_time: "", start_time: "" },
      { end_time: "", start_time: "" },
    ],
    lat: 0,
    long: 0,
    position: 0,
    region: 0,
  }
  const onSubmit = (values: Branch) => {
    dispatch(createBranch(values))
  }

  useEffect(() => {
    dispatch(getRegions())
  }, [dispatch])

  return {
    initialValues,
    validationSchema,
    onSubmit,
    regions,
    isCreatingBranchStatus,
  }
}
