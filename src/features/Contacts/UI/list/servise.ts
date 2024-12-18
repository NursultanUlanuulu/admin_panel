import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { StatusResponse } from "../../../../shared/enums"
import { deleteContact, getContacts } from "../../store/actions"
import {
  selectContacts,
  selectCreateContactStatus,
  selectDeleteContactStatus,
  selectDetailContact,
  selectGetContactStatus,
  selectUpdateContactStatus,
} from "../../store/selectors"
import { Contact } from "../../type"

type Modal = "delete" | "create" | "edit" | "info"

const ContactsService = () => {
  const [modal, setModal] = useState<{
    [key: string]: boolean
  }>({
    create: false,
    info: false,
    edit: false,
  })

  const [activeContact, setActiveContact] = useState({} as Contact)

  const headerLinks = ["Позиция", "Фото", "ФИО", "ТИП", "Контакт", ""]

  const contacts = useAppSelector(selectContacts)

  const detail = useAppSelector(selectDetailContact)

  const dispatch = useAppDispatch()

  const getContactsStatus = useAppSelector(selectGetContactStatus)

  const isCreatingContactSuccess =
    useAppSelector(selectCreateContactStatus) === StatusResponse.SUCCESS

  const isUpdateContactSuccess =
    useAppSelector(selectUpdateContactStatus) === StatusResponse.SUCCESS

  const isDelateContactSuccess =
    useAppSelector(selectDeleteContactStatus) === StatusResponse.SUCCESS

  // get
  useEffect(() => {
    dispatch(getContacts())
  }, [])

  // create
  useEffect(() => {
    if (isCreatingContactSuccess && modal.create) {
      setModal({ ...modal, create: false })
    }
  }, [isCreatingContactSuccess])

  // update
  useEffect(() => {
    if (isUpdateContactSuccess && modal.edit) {
      setModal({ ...modal, edit: false })
    }
  }, [isUpdateContactSuccess])

  useEffect(() => {
    if (isDelateContactSuccess && modal.delete) {
      setModal({ ...modal, delete: false })
    }
  }, [isDelateContactSuccess])

  const handleModal = (type: Modal) => {
    setModal({ ...modal, [type]: !modal[type] })
  }

  const handleDeleteContact = () => {
    dispatch(deleteContact(activeContact.id ?? 0))
  }

  const handleChangeActiveContact = (contact: Contact) => {
    setActiveContact(contact)
  }

  return {
    headerLinks,
    contacts,
    modal,
    detail,
    activeContact,
    getContactsStatus,
    handleModal,
    handleDeleteContact,
    handleChangeActiveContact,
  }
}

export default ContactsService
