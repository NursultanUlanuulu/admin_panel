import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "../../../shared/enums";
import { StoryCrud } from "../type";
import { createStory, deleteStory, getStory, getStoryById, partiallyUpdateStory, updateStory } from "./actions";


interface InitialState {
  getStory: {
    status: StatusResponse;
    message?: string;
  };
  createStory: {
    status: StatusResponse;
    message?: string;
  };
  getStoryById: {
    status: StatusResponse;
    message?: string;
  };
  updateStory: {
    status: StatusResponse;
    message?: string;
  };
  partiallyUpdateStory: {
    status: StatusResponse;
    message?: string;
  };
  deleteStory: {
    status: StatusResponse;
    message?: string;
  };
  story: StoryCrud[];
}

const initialState: InitialState = {
  getStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  getStoryById: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  story: [],
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
  extraReducers(builder) {
    ///get
    builder
      .addCase(getStory.fulfilled, (state, { payload }) => {
        state.getStory.status = StatusResponse.SUCCESS;
        state.story = payload
      })
      .addCase(getStory.pending, (state) => {
        state.getStory.status = StatusResponse.LOADING;
      })
      .addCase(getStory.rejected, (state, { payload }) => {
        state.getStory.status = StatusResponse.ERROR;
        state.getStory.message = payload as string;
      });

    ///post
    builder
      .addCase(createStory.fulfilled, (state) => {
        state.createStory.status = StatusResponse.SUCCESS;
      })
      .addCase(createStory.pending, (state) => {
        state.createStory.status = StatusResponse.LOADING;
      })
      .addCase(createStory.rejected, (state, { payload }) => {
        state.createStory.status = StatusResponse.ERROR;
        state.createStory.message = payload as string;
      });

    ///getById
    builder
      .addCase(getStoryById.fulfilled, (state) => {
        state.getStoryById.status = StatusResponse.SUCCESS;
      })
      .addCase(getStoryById.pending, (state) => {
        state.getStoryById.status = StatusResponse.LOADING;
      })
      .addCase(getStoryById.rejected, (state, { payload }) => {
        state.getStoryById.status = StatusResponse.ERROR;
        state.getStoryById.message = payload as string;
      });

    ///put
    builder
      .addCase(updateStory.fulfilled, (state) => {
        state.updateStory.status = StatusResponse.SUCCESS;
      })
      .addCase(updateStory.pending, (state) => {
        state.updateStory.status = StatusResponse.LOADING;
      })
      .addCase(updateStory.rejected, (state, { payload }) => {
        state.updateStory.status = StatusResponse.ERROR;
        state.updateStory.message = payload as string;
      });

    ///patch
    builder
      .addCase(partiallyUpdateStory.fulfilled, (state) => {
        state.partiallyUpdateStory.status = StatusResponse.SUCCESS;
      })
      .addCase(partiallyUpdateStory.pending, (state) => {
        state.partiallyUpdateStory.status = StatusResponse.LOADING;
      })
      .addCase(partiallyUpdateStory.rejected, (state, { payload }) => {
        state.partiallyUpdateStory.status = StatusResponse.ERROR;
        state.partiallyUpdateStory.message = payload as string;
      });

    ///delate
    builder
      .addCase(deleteStory.fulfilled, (state) => {
        state.deleteStory.status = StatusResponse.SUCCESS;
      })
      .addCase(deleteStory.pending, (state) => {
        state.deleteStory.status = StatusResponse.LOADING;
      })
      .addCase(deleteStory.rejected, (state, { payload }) => {
        state.deleteStory.status = StatusResponse.ERROR;
        state.deleteStory.message = payload as string;
      });
  },
});

export default storySlice.reducer;
