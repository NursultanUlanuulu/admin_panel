import { RootState } from "@/app/store"

export const selectRegion = (state: RootState) => state.region.regions

export const selectRegionDetail = (state: RootState) => state.region.region

export const selectGetRegionStatus = (state: RootState) =>
  state.region.deleteRegion.status

export const selectCreateRegionStatus = (state: RootState) =>
  state.region.createRegion.status

export const selectUpdateRegionStatus = (state: RootState) =>
  state.region.updateRegion.status

export const selectPartiallyUpdateRegionStatusPatch = (state: RootState) =>
  state.region.updateRegion.status

export const selectDeleteRegionStatus = (state: RootState) =>
  state.region.deleteRegion.status
