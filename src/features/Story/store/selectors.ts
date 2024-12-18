import { RootState } from "../../../app/store";

export const selectStory = (state: RootState) => state.story.story;

export const selectGetStoryStatus = (state: RootState) =>
  state.story.getStory.status;

export const selectCreateStoryStatus = (state: RootState) =>
  state.story.createStory.status;

export const selectUpdateStoryStatus = (state: RootState) =>
  state.story.updateStory.status;

export const selectPartiallyUpdateStoryStatusPatch = (state: RootState) =>
  state.story.updateStory.status;

export const selectDeleteStoryStatus = (state: RootState) =>
  state.story.deleteStory.status;
