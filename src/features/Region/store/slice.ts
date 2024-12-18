import { createSlice } from "@reduxjs/toolkit"
import { StatusResponse } from "../../../shared/enums"
import {
  createRegion,
  deleteRegion,
  getRegionById,
  getRegions,
  partiallyUpdateRegion,
  updateRegion,
} from "./actions"
import { Region } from "../type"

interface InitialState {
  getRegions: {
    status: StatusResponse
    message?: string
  }
  createRegion: {
    status: StatusResponse
    message?: string
  }
  getRegionById: {
    status: StatusResponse
    message?: string
  }
  updateRegion: {
    status: StatusResponse
    message?: string
  }
  partiallyUpdateRegion: {
    status: StatusResponse
    message?: string
  }
  deleteRegion: {
    status: StatusResponse
    message?: string
  }
  regions: Region[]
  region: Region[]
}

const initialState: InitialState = {
  getRegions: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createRegion: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  getRegionById: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateRegion: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateRegion: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteRegion: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  regions: [],
  region: [],
}

export const regionSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    ///get
    builder
      .addCase(getRegions.fulfilled, (state, { payload }) => {
        state.getRegions.status = StatusResponse.SUCCESS
        state.regions = payload
      })
      .addCase(getRegions.pending, (state) => {
        state.getRegions.status = StatusResponse.LOADING
      })
      .addCase(getRegions.rejected, (state, { payload }) => {
        state.getRegions.status = StatusResponse.ERROR
        state.getRegions.message = payload as string
      })

    ///post
    builder
      .addCase(createRegion.fulfilled, (state) => {
        state.createRegion.status = StatusResponse.SUCCESS
      })
      .addCase(createRegion.pending, (state) => {
        state.createRegion.status = StatusResponse.LOADING
      })
      .addCase(createRegion.rejected, (state, { payload }) => {
        state.createRegion.status = StatusResponse.ERROR
        state.createRegion.message = payload as string
      })

    ///getById
    builder
      .addCase(getRegionById.fulfilled, (state, { payload }) => {
        state.getRegionById.status = StatusResponse.SUCCESS
        state.region = payload
      })
      .addCase(getRegionById.pending, (state) => {
        state.getRegionById.status = StatusResponse.LOADING
      })
      .addCase(getRegionById.rejected, (state, { payload }) => {
        state.getRegionById.status = StatusResponse.ERROR
        state.getRegionById.message = payload as string
      })

    ///put
    builder
      .addCase(updateRegion.fulfilled, (state) => {
        state.updateRegion.status = StatusResponse.SUCCESS
      })
      .addCase(updateRegion.pending, (state) => {
        state.updateRegion.status = StatusResponse.LOADING
      })
      .addCase(updateRegion.rejected, (state, { payload }) => {
        state.updateRegion.status = StatusResponse.ERROR
        state.updateRegion.message = payload as string
      })

    ///patch
    builder
      .addCase(partiallyUpdateRegion.fulfilled, (state) => {
        state.partiallyUpdateRegion.status = StatusResponse.SUCCESS
      })
      .addCase(partiallyUpdateRegion.pending, (state) => {
        state.partiallyUpdateRegion.status = StatusResponse.LOADING
      })
      .addCase(partiallyUpdateRegion.rejected, (state, { payload }) => {
        state.partiallyUpdateRegion.status = StatusResponse.ERROR
        state.partiallyUpdateRegion.message = payload as string
      })

    ///delate
    builder
      .addCase(deleteRegion.fulfilled, (state) => {
        state.deleteRegion.status = StatusResponse.SUCCESS
      })
      .addCase(deleteRegion.pending, (state) => {
        state.deleteRegion.status = StatusResponse.LOADING
      })
      .addCase(deleteRegion.rejected, (state, { payload }) => {
        state.deleteRegion.status = StatusResponse.ERROR
        state.deleteRegion.message = payload as string
      })
  },
})

export default regionSlice.reducer
