import { RootState } from "@/app/store"

export const selectBranch = (state: RootState) => state.branch.branch

export const selectBranchs = (state: RootState) => state.branch.branchs

export const selectGetBranchStatus = (state: RootState) =>
  state.branch.getBranchList.status

export const selectCreateBranchStatus = (state: RootState) =>
  state.branch.createBranch.status

export const selectUpdateBranchStatus = (state: RootState) =>
  state.branch.updateBranch.status

export const selectPartiallyUpdateBranchStatusPatch = (state: RootState) =>
  state.branch.updateBranch.status

export const selectDeleteBranchStatus = (state: RootState) =>
  state.branch.deleteBranch.status
