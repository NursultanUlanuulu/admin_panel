import { createSlice } from "@reduxjs/toolkit"
import { Branch } from "../type"
import {
  createBranch,
  deleteBranch,
  getBranchById,
  getBranchList,
  partiallyUpdateBranch,
  updateBranch,
} from "./action"
import { StatusResponse } from "@/shared/enums"

interface InitialState {
  getBranchList: {
    status: StatusResponse
    message?: string
  }
  createBranch: {
    status: StatusResponse
    message?: string
  }
  detail: {
    status: StatusResponse
    message?: string
  }
  updateBranch: {
    status: StatusResponse
    message?: string
  }
  partiallyUpdateBranch: {
    status: StatusResponse
    message?: string
  }
  deleteBranch: {
    status: StatusResponse
    message?: string
  }
  branchs: Branch | null
  branch: Branch[]
}

const initialState: InitialState = {
  getBranchList: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createBranch: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  detail: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateBranch: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateBranch: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteBranch: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  branch: [],
  branchs: null,
}

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBranchList.fulfilled, (state, { payload }) => {
        state.getBranchList.status = StatusResponse.SUCCESS
        state.branch = payload
      })
      .addCase(getBranchList.pending, (state) => {
        state.getBranchList.status = StatusResponse.LOADING
      })
      .addCase(getBranchList.rejected, (state, { payload }) => {
        state.getBranchList.status = StatusResponse.ERROR
        state.getBranchList.message = payload as string
      })
    /// push
    builder
      .addCase(createBranch.fulfilled, (state) => {
        state.createBranch.status = StatusResponse.SUCCESS
      })
      .addCase(createBranch.pending, (state) => {
        state.createBranch.status = StatusResponse.LOADING
      })
      .addCase(createBranch.rejected, (state, { payload }) => {
        state.createBranch.status = StatusResponse.ERROR
        state.createBranch.message = payload as string
      })

    ////getByID
    builder
      .addCase(getBranchById.fulfilled, (state, action) => {
        state.detail.status = StatusResponse.SUCCESS
        state.branchs = action.payload
      })
      .addCase(getBranchById.pending, (state) => {
        state.detail.status = StatusResponse.LOADING
      })
      .addCase(getBranchById.rejected, (state, action) => {
        state.detail.status = StatusResponse.ERROR
        state.detail.message = action.payload as string
      })
    ////PUT
    builder
      .addCase(updateBranch.fulfilled, (state) => {
        state.updateBranch.status = StatusResponse.SUCCESS
      })
      .addCase(updateBranch.pending, (state) => {
        state.updateBranch.status = StatusResponse.LOADING
      })
      .addCase(updateBranch.rejected, (state, { payload }) => {
        state.updateBranch.status = StatusResponse.ERROR
        state.updateBranch.message = payload as string
      })
    ////PATCH
    builder
      .addCase(partiallyUpdateBranch.fulfilled, (state) => {
        state.updateBranch.status = StatusResponse.SUCCESS
      })
      .addCase(partiallyUpdateBranch.pending, (state) => {
        state.updateBranch.status = StatusResponse.LOADING
      })
      .addCase(partiallyUpdateBranch.rejected, (state, { payload }) => {
        ;(state.updateBranch.status = StatusResponse.ERROR),
          (state.updateBranch.message = payload as string)
      })
    ////DELETE
    builder
      .addCase(deleteBranch.fulfilled, (state) => {
        state.deleteBranch.status = StatusResponse.SUCCESS
      })
      .addCase(deleteBranch.pending, (state) => {
        state.deleteBranch.status = StatusResponse.LOADING
      })
      .addCase(deleteBranch.rejected, (state, { payload }) => {
        state.deleteBranch.status = StatusResponse.ERROR
        state.deleteBranch.message = payload as string
      })
  },
})

export default branchSlice.reducer
