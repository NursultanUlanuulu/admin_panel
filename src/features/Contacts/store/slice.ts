import { createSlice } from "@reduxjs/toolkit"
import { StatusResponse } from "../../../shared/enums"
import { Contact } from "../type"
import {
  createContact,
  deleteContact,
  getContactById,
  getContacts,
  partiallyUpdateContact,
  updateContact,
} from "./actions"

interface InitialState {
  getContacts: {
    status: StatusResponse
    message?: string
  }
  createContact: {
    status: StatusResponse
    message?: string
  }
  contactInfo: {
    status: StatusResponse
    message?: string
  }
  updateContact: {
    status: StatusResponse
    message?: string
  }
  partiallyUpdateContact: {
    status: StatusResponse
    message?: string
  }
  deleteContact: {
    status: StatusResponse
    message?: string
  }
  contact: Contact[]
  detail: Contact[]
}

const initialState: InitialState = {
  getContacts: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createContact: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  contactInfo: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateContact: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateContact: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteContact: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  contact: [],
  detail: [],
}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.getContacts.status = StatusResponse.SUCCESS
        state.contact = payload
      })
      .addCase(getContacts.pending, (state) => {
        state.getContacts.status = StatusResponse.LOADING
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.getContacts.status = StatusResponse.ERROR
        state.getContacts.message = payload as string
      })
    //// POST
    builder
      .addCase(createContact.fulfilled, (state) => {
        state.createContact.status = StatusResponse.SUCCESS
      })
      .addCase(createContact.pending, (state) => {
        state.createContact.status = StatusResponse.LOADING
      })
      .addCase(createContact.rejected, (state, { payload }) => {
        state.createContact.status = StatusResponse.ERROR
        state.createContact.message = payload as string
      })
    builder
      .addCase(getContactById.fulfilled, (state, action) => {
        state.contactInfo.status = StatusResponse.SUCCESS
        state.detail = action.payload
      })
      .addCase(getContactById.pending, (state) => {
        state.contactInfo.status = StatusResponse.LOADING
      })
      .addCase(getContactById.rejected, (state, action) => {
        state.contactInfo.status = StatusResponse.ERROR
        state.contactInfo.message = action.payload as string
      })

    //// PUT
    builder
      .addCase(updateContact.fulfilled, (state) => {
        state.updateContact.status = StatusResponse.SUCCESS
      })
      .addCase(updateContact.pending, (state) => {
        state.updateContact.status = StatusResponse.LOADING
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.updateContact.status = StatusResponse.ERROR
        state.updateContact.message = payload as string
      })
    //// PATCH
    builder
      .addCase(partiallyUpdateContact.fulfilled, (state) => {
        state.partiallyUpdateContact.status = StatusResponse.SUCCESS
      })
      .addCase(partiallyUpdateContact.pending, (state) => {
        state.partiallyUpdateContact.status = StatusResponse.LOADING
      })
      .addCase(partiallyUpdateContact.rejected, (state, { payload }) => {
        state.partiallyUpdateContact.status = StatusResponse.ERROR
        state.partiallyUpdateContact.message = payload as string
      })
    /// DELETE
    builder
      .addCase(deleteContact.fulfilled, (state) => {
        state.deleteContact.status = StatusResponse.SUCCESS
      })
      .addCase(deleteContact.pending, (state) => {
        state.deleteContact.status = StatusResponse.LOADING
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.deleteContact.status = StatusResponse.ERROR
        state.deleteContact.message = payload as string
      })
  },
})

export default contactsSlice.reducer
