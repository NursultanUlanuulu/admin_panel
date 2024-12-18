import { RootState } from "@/app/store"

export const selectDocumentFolders = (state: RootState) =>
  state.documentFolder.documentFolders

export const selectDocumentFolderId = (state: RootState) =>
  state.documentFolder.documentFolder

export const selectGetDocumentFolderStatus = (state: RootState) =>
  state.documentFolder.getDocumentFolder.status

export const selectCreateDocumentFolderStatus = (state: RootState) =>
  state.documentFolder.createDocumentFolder.status

export const selectGetDocumentByIdStatus = (state: RootState) =>
  state.documentFolder.documentFolderById.status

export const selectUpdateDocumentFolderStatus = (state: RootState) =>
  state.documentFolder.updateDocumentFolder.status

export const selectPartiallyUpdateDocumentFolderStatus = (state: RootState) =>
  state.documentFolder.partiallyUpdateDocumentFolder.status

export const selectDeleteDocumentFolderStatus = (state: RootState) =>
  state.documentFolder.deleteDocumentFolder.status
