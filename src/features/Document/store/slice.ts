import { createSlice } from "@reduxjs/toolkit"
import { StatusResponse } from "../../../shared/enums"
import {
  createDocument,
  deleteDocument,
  getDocumentById,
  getDocumentList,
  partiallyUpdateDocument,
  updateDocument,
} from "./actions"
import { Document } from "../type"

interface InitialState {
  getDocument: {
    status: StatusResponse
    message?: string
  }
  createDocument: {
    status: StatusResponse
    message?: string
  }
  detail: {
    status: StatusResponse
    message?: string
  }
  updateDocument: {
    status: StatusResponse
    message?: string
  }
  partiallyUpdateDocument: {
    status: StatusResponse
    message?: string
  }
  deleteDocument: {
    status: StatusResponse
    message?: string
  }
  document: Document[] | null
  documentId: Document | null
}

const initialState: InitialState = {
  getDocument: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createDocument: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  detail: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateDocument: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateDocument: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteDocument: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  document: null,
  documentId: null,
}

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDocumentList.fulfilled, (state, { payload }) => {
        state.getDocument.status = StatusResponse.SUCCESS
        state.document = payload
      })
      .addCase(getDocumentList.pending, (state) => {
        state.getDocument.status = StatusResponse.LOADING
      })
      .addCase(getDocumentList.rejected, (state, { payload }) => {
        state.getDocument.status = StatusResponse.ERROR
        state.getDocument.message = payload as string
      })
    /// push
    builder
      .addCase(createDocument.fulfilled, (state) => {
        state.createDocument.status = StatusResponse.SUCCESS
      })
      .addCase(createDocument.pending, (state) => {
        state.createDocument.status = StatusResponse.LOADING
      })
      .addCase(createDocument.rejected, (state, { payload }) => {
        state.createDocument.status = StatusResponse.ERROR
        state.createDocument.message = payload as string
      })

    ////getByID
    builder
      .addCase(getDocumentById.fulfilled, (state, action) => {
        state.detail.status = StatusResponse.SUCCESS
        state.documentId = action.payload
      })
      .addCase(getDocumentById.pending, (state) => {
        state.detail.status = StatusResponse.LOADING
      })
      .addCase(getDocumentById.rejected, (state, action) => {
        state.detail.status = StatusResponse.ERROR
        state.detail.message = action.payload as string
      })
    ////PUT
    builder
      .addCase(updateDocument.fulfilled, (state) => {
        state.updateDocument.status = StatusResponse.SUCCESS
      })
      .addCase(updateDocument.pending, (state) => {
        state.updateDocument.status = StatusResponse.LOADING
      })
      .addCase(updateDocument.rejected, (state, { payload }) => {
        state.updateDocument.status = StatusResponse.ERROR
        state.updateDocument.message = payload as string
      })
    ////PATCH
    builder
      .addCase(partiallyUpdateDocument.fulfilled, (state) => {
        state.updateDocument.status = StatusResponse.SUCCESS
      })
      .addCase(partiallyUpdateDocument.pending, (state) => {
        state.updateDocument.status = StatusResponse.LOADING
      })
      .addCase(partiallyUpdateDocument.rejected, (state, { payload }) => {
        ;(state.updateDocument.status = StatusResponse.ERROR),
          (state.updateDocument.message = payload as string)
      })
    ////DELETE
    builder
      .addCase(deleteDocument.fulfilled, (state) => {
        state.deleteDocument.status = StatusResponse.SUCCESS
      })
      .addCase(deleteDocument.pending, (state) => {
        state.deleteDocument.status = StatusResponse.LOADING
      })
      .addCase(deleteDocument.rejected, (state, { payload }) => {
        state.deleteDocument.status = StatusResponse.ERROR
        state.deleteDocument.message = payload as string
      })
  },
})

export default documentSlice.reducer
