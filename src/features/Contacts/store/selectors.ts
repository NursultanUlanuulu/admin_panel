import { RootState } from "@/app/store"

export const selectContacts = (state: RootState) => state.contacts.contact

export const selectDetailContact = (state: RootState) => state.contacts.detail

export const selectGetContactStatus = (state: RootState) =>
  state.contacts.getContacts.status

export const selectCreateContactStatus = (state: RootState) =>
  state.contacts.createContact.status

export const selectUpdateContactStatus = (state: RootState) =>
  state.contacts.updateContact.status

export const selectPartiallyUpdateContactStatusPatch = (state: RootState) =>
  state.contacts.updateContact.status

export const selectDeleteContactStatus = (state: RootState) =>
  state.contacts.deleteContact.status
