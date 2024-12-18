import { createSlice } from "@reduxjs/toolkit"
import { DocumentFolder } from "../type"
import {
  createDocumentFolder,
  deleteDocumentFolder,
  getDocumentFolderById,
  getDocumentFolderList,
  partiallyUpdateDocumentFolder,
  updateDocumentFolder,
} from "./actions"
import { StatusResponse } from "@/shared/enums"

interface InitialState {
  getDocumentFolder: {
    status: StatusResponse
    message?: string
  }
  createDocumentFolder: {
    status: StatusResponse
    message?: string
  }
  documentFolderById: {
    status: StatusResponse
    message?: string
  }
  updateDocumentFolder: {
    status: StatusResponse
    message?: string
  }
  partiallyUpdateDocumentFolder: {
    status: StatusResponse
    message?: string
  }
  deleteDocumentFolder: {
    status: StatusResponse
    message?: string
  }
  documentFolders: DocumentFolder[]
  documentFolder: DocumentFolder | null
}

const initialState: InitialState = {
  getDocumentFolder: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createDocumentFolder: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  documentFolderById: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateDocumentFolder: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateDocumentFolder: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteDocumentFolder: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  documentFolders: [],
  documentFolder: null,
}

const documentFolderSlice = createSlice({
  name: "documentFolder",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDocumentFolderList.fulfilled, (state, { payload }) => {
        state.getDocumentFolder.status = StatusResponse.SUCCESS
        state.documentFolders = payload
      })
      .addCase(getDocumentFolderList.pending, (state) => {
        state.getDocumentFolder.status = StatusResponse.LOADING
      })
      .addCase(getDocumentFolderList.rejected, (state, { payload }) => {
        state.getDocumentFolder.status = StatusResponse.ERROR
        state.getDocumentFolder.message = payload as string
      })

    /// push
    builder
      .addCase(createDocumentFolder.fulfilled, (state) => {
        state.createDocumentFolder.status = StatusResponse.SUCCESS
      })
      .addCase(createDocumentFolder.pending, (state) => {
        state.createDocumentFolder.status = StatusResponse.LOADING
      })
      .addCase(createDocumentFolder.rejected, (state, { payload }) => {
        state.createDocumentFolder.status = StatusResponse.ERROR
        state.createDocumentFolder.message = payload as string
      })

    ////getByID
    builder
      .addCase(getDocumentFolderById.fulfilled, (state, { payload }) => {
        state.documentFolderById.status = StatusResponse.SUCCESS
        state.documentFolder = payload
      })
      .addCase(getDocumentFolderById.pending, (state) => {
        state.documentFolderById.status = StatusResponse.LOADING
      })
      .addCase(getDocumentFolderById.rejected, (state, { payload }) => {
        state.documentFolderById.status = StatusResponse.ERROR
        state.documentFolderById.message = payload as string
      })

    ////PUT
    builder
      .addCase(updateDocumentFolder.fulfilled, (state) => {
        state.updateDocumentFolder.status = StatusResponse.SUCCESS
      })
      .addCase(updateDocumentFolder.pending, (state) => {
        state.updateDocumentFolder.status = StatusResponse.LOADING
      })
      .addCase(updateDocumentFolder.rejected, (state, { payload }) => {
        state.updateDocumentFolder.status = StatusResponse.ERROR
        state.updateDocumentFolder.message = payload as string
      })

    ////PATCH
    builder
      .addCase(partiallyUpdateDocumentFolder.fulfilled, (state) => {
        state.updateDocumentFolder.status = StatusResponse.SUCCESS
      })
      .addCase(partiallyUpdateDocumentFolder.pending, (state) => {
        state.updateDocumentFolder.status = StatusResponse.LOADING
      })
      .addCase(partiallyUpdateDocumentFolder.rejected, (state, { payload }) => {
        ;(state.updateDocumentFolder.status = StatusResponse.ERROR),
          (state.updateDocumentFolder.message = payload as string)
      })
    ////DELETE
    builder
      .addCase(deleteDocumentFolder.fulfilled, (state) => {
        state.deleteDocumentFolder.status = StatusResponse.SUCCESS
      })
      .addCase(deleteDocumentFolder.pending, (state) => {
        state.deleteDocumentFolder.status = StatusResponse.LOADING
      })
      .addCase(deleteDocumentFolder.rejected, (state, { payload }) => {
        state.deleteDocumentFolder.status = StatusResponse.ERROR
        state.deleteDocumentFolder.message = payload as string
      })
  },
})

export default documentFolderSlice.reducer
