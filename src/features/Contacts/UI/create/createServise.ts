import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { StatusResponse } from "../../../../shared/enums"
import { selectCreateContactStatus } from "../../store/selectors"
import * as yup from "yup"
import { Contact } from "../../type"
import { createContact } from "../../store/actions"

const CreateService = () => {
  const dispatch = useAppDispatch()

  const isCreatingContactStatus =
    useAppSelector(selectCreateContactStatus) === StatusResponse.LOADING

  const validationSchema = yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    contact: yup.string().required("Обязательное поле"),
    type: yup.string().required("Обязательное поле"),
    imageFile: yup.mixed().required("Обязательное поле"),
    position: yup
      .number()
      .required("Обязательное поле")
      .positive("Должно быть положительным")
      .integer("Должно быть целым числом"),
  })

  const initialValues: Contact = {
    id: 0,
    name: "",
    contact: "",
    imageFile: null,
    type: "",
    image: "",
    position: 0,
  }

  const onSubmit = (values: Contact) => {
    dispatch(createContact(values))
  }

  const typeOptions = [
    { value: "Чат", label: "Чат" },
    { value: "Телефон", label: "Телефон" },
    { value: "Социальная сеть", label: "Социальная сеть" },
  ]
  return {
    initialValues,
    validationSchema,
    onSubmit,
    typeOptions,
    isCreatingContactStatus,
  }
}

export default CreateService
