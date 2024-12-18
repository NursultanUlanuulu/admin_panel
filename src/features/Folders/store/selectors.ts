// import { RootState } from "../../../app/store"

// export const selectloanApplication = (state: RootState) =>
//   state.loanApplication.results

// export const selectGetLoanApplicationStatus = (state: RootState) =>
//   state.loanApplication.getLoanApplicationsList.status

import { RootState } from "@/app/store"
import { createSelector } from "@reduxjs/toolkit"

// export const selectLoanApplicationsState = (state: RootState) =>
//   state.loanApplication

// export const selectGetLoanApplicationStatus = (state: RootState) =>
//   state.loanApplication.status

// export const selectLoanApplications = createSelector(
//   selectLoanApplicationsState,
//   (loanApplicationsState) => loanApplicationsState.loanApplications.results,
// )

// // export const selectGetLoanApplicationStatus = createSelector(
// //   selectLoanApplicationsState,
// //   (loanApplicationsState) => loanApplicationsState.status,
// // )
// Селектор для получения состояния getLoanApplicationsList
export const selectGetLoanApplicationsList = (state: RootState) =>
  state.loanApplication.getLoanApplicationsList

export const selectGetLoanApplicationsStatus = (state: RootState) =>
  state.loanApplication.getLoanApplicationsList.status

// Селектор для получения статуса getLoanApplicationsList
// export const selectGetLoanApplicationsListStatus = createSelector(
//   [selectGetLoanApplicationsList],
//   (getLoanApplicationsList) => getLoanApplicationsList.status,
// )

// Селектор для получения сообщения getLoanApplicationsList
export const selectGetLoanApplicationsListMessage = createSelector(
  [selectGetLoanApplicationsList],
  (getLoanApplicationsList) => getLoanApplicationsList.message,
)

// Селектор для получения loanApplication
export const selectLoanApplication = (state: RootState) =>
  state.loanApplication.loanApplication.results

// export const selectLoanApplicationsPagination = createSelector(
//   selectLoanApplicationsState,
//   (loanApplicationsState) => ({
//     next: loanApplicationsState.loanApplications.next,
//     previous: loanApplicationsState.loanApplications.previous,
//   }),
// )
