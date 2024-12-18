import { RootState } from "../../../app/store"

export const selectDocument = (state: RootState) => state.document.document

export const selectDocumentId = (state: RootState) => state.document.documentId

export const selectGetDocumentStatus = (state: RootState) =>
  state.document.getDocument.status

export const selectCreateDocumentStatus = (state: RootState) =>
  state.document.createDocument.status

export const selectUpdateDocumentStatus = (state: RootState) =>
  state.document.updateDocument.status

export const selectPartiallyUpdateDocumentStatus = (state: RootState) =>
  state.document.partiallyUpdateDocument.status

export const selectDeleteDocumentStatus = (state: RootState) =>
  state.document.deleteDocument.status
