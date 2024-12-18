import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "../../../shared/enums";
import { MainStory } from "../type";
import {
  createMainStory,
  deleteMainStory,
  getMainStory,
  getMainStoryById,
  // partiallyUpdateMainStory,
  updateMainStory,
} from "./actions";

interface InitialState {
  getMainStory: {
    status: StatusResponse;
    message?: string;
  };
  createMainStory: {
    status: StatusResponse;
    message?: string;
  };
  getMainStoryById: {
    status: StatusResponse;
    message?: string;
  };
  updateMainStory: {
    status: StatusResponse;
    message?: string;
  };
  // partiallyUpdateMainStory: {
  //   status: StatusResponse;
  //   message?: string;
  // };
  deleteMainStory: {
    status: StatusResponse;
    message?: string;
  };
  mainStory: MainStory[];
}

const initialState: InitialState = {
  getMainStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createMainStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  getMainStoryById: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateMainStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  // partiallyUpdateMainStory: {
  //   status: StatusResponse.INITIAL,
  //   message: "",
  // },
  deleteMainStory: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  mainStory: [],
};

export const mainStorySlice = createSlice({
  name: "mainStory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    ///get
    builder
      .addCase(getMainStory.fulfilled, (state, { payload }) => {
        state.getMainStory.status = StatusResponse.SUCCESS;
        state.mainStory = payload;
        console.log(payload);
        
      })
      .addCase(getMainStory.pending, (state) => {
        state.getMainStory.status = StatusResponse.LOADING;
      })
      .addCase(getMainStory.rejected, (state, action) => {
        state.getMainStory.status = StatusResponse.ERROR;
        state.getMainStory.message = action.payload
          ? (action.payload as string)
          : "Unknown error";
      });

    ///post
    builder
      .addCase(createMainStory.fulfilled, (state) => {
        state.createMainStory.status = StatusResponse.SUCCESS;
      })
      .addCase(createMainStory.pending, (state) => {
        state.createMainStory.status = StatusResponse.LOADING;
      })
      .addCase(createMainStory.rejected, (state, action) => {
        state.createMainStory.status = StatusResponse.ERROR;
        state.createMainStory.message = action.payload as string;
      });

    ///getById
    builder
      .addCase(getMainStoryById.fulfilled, (state) => {
        state.getMainStoryById.status = StatusResponse.SUCCESS;
      })
      .addCase(getMainStoryById.pending, (state) => {
        state.getMainStoryById.status = StatusResponse.LOADING;
      })
      .addCase(getMainStoryById.rejected, (state, { payload }) => {
        state.getMainStoryById.status = StatusResponse.ERROR;
        state.getMainStoryById.message = payload as string;
      });

    ///put
    builder
      .addCase(updateMainStory.fulfilled, (state) => {
        state.updateMainStory.status = StatusResponse.SUCCESS;
      })
      .addCase(updateMainStory.pending, (state) => {
        state.updateMainStory.status = StatusResponse.LOADING;
      })
      .addCase(updateMainStory.rejected, (state, { payload }) => {
        state.updateMainStory.status = StatusResponse.ERROR;
        state.updateMainStory.message = payload as string;
      });

    ///patch
    // builder
    //   .addCase(partiallyUpdateMainStory.fulfilled, (state) => {
    //     state.partiallyUpdateMainStory.status = StatusResponse.SUCCESS;
    //   })
    //   .addCase(partiallyUpdateMainStory.pending, (state) => {
    //     state.partiallyUpdateMainStory.status = StatusResponse.LOADING;
    //   })
    //   .addCase(partiallyUpdateMainStory.rejected, (state, { payload }) => {
    //     state.partiallyUpdateMainStory.status = StatusResponse.ERROR;
    //     state.partiallyUpdateMainStory.message = payload as string;
    //   });

    ///delate
    builder
      .addCase(deleteMainStory.fulfilled, (state) => {
        state.deleteMainStory.status = StatusResponse.SUCCESS;
      })
      .addCase(deleteMainStory.pending, (state) => {
        state.deleteMainStory.status = StatusResponse.LOADING;
      })
      .addCase(deleteMainStory.rejected, (state, { payload }) => {
        state.deleteMainStory.status = StatusResponse.ERROR;
        state.deleteMainStory.message = payload as string;
      });
  },
});

export default mainStorySlice.reducer;
