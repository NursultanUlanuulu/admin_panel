import { RootState } from "../../../app/store";

export const selectMainStory = (state: RootState) => state.mainStory.mainStory;

export const selectGetMainStoryStatus = (state: RootState) =>
  state.mainStory.getMainStory.status;

export const selectCreateMainStoryStatus = (state: RootState) =>
  state.mainStory.createMainStory.status;

export const selectUpdateMainStoryStatus = (state: RootState) =>
  state.mainStory.updateMainStory.status;

// export const selectPartiallyUpdateMainStoryStatusPatch = (state: RootState) =>
//   state.mainStory.updateMainStory.status;

export const selectDeleteMainStoryStatus = (state: RootState) =>
  state.mainStory.deleteMainStory.status;
