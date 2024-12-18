import { createSlice } from "@reduxjs/toolkit";
import { StatusResponse } from "../../../shared/enums";
import { Notification } from "../type";
import {
  createNotification,
  deleteNotification,
  getNotification,
  getNotificationById,
  partiallyUpdateNotification,
  updateNotification,
} from "./actions";

interface InitialState {
  getNotification: {
    status: StatusResponse;
    message?: string;
  };
  createNotification: {
    status: StatusResponse;
    message?: string;
  };
  getNotificationById: {
    status: StatusResponse;
    message?: string;
  };
  updateNotification: {
    status: StatusResponse;
    message?: string;
  };
  partiallyUpdateNotification: {
    status: StatusResponse;
    message?: string;
  };
  deleteNotification: {
    status: StatusResponse;
    message?: string;
  };
  notification: Notification[];
}

const initialState: InitialState = {
  getNotification: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  createNotification: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  getNotificationById: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  updateNotification: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  partiallyUpdateNotification: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  deleteNotification: {
    status: StatusResponse.INITIAL,
    message: "",
  },
  notification: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers(builder) {
    ///get
    builder
      .addCase(getNotification.fulfilled, (state, { payload }) => {
        state.getNotification.status = StatusResponse.SUCCESS;
        state.notification = payload;
      })
      .addCase(getNotification.pending, (state) => {
        state.getNotification.status = StatusResponse.LOADING;
      })
      .addCase(getNotification.rejected, (state, { payload }) => {
        state.getNotification.status = StatusResponse.ERROR;
        state.getNotification.message = payload as string;
      });

    ///post
    builder
      .addCase(createNotification.fulfilled, (state) => {
        state.createNotification.status = StatusResponse.SUCCESS;
      })
      .addCase(createNotification.pending, (state) => {
        state.createNotification.status = StatusResponse.LOADING;
      })
      .addCase(createNotification.rejected, (state, { payload }) => {
        state.createNotification.status = StatusResponse.ERROR;
        state.createNotification.message = payload as string;
      });

    ///getById
    builder
      .addCase(getNotificationById.fulfilled, (state) => {
        state.getNotificationById.status = StatusResponse.SUCCESS;
      })
      .addCase(getNotificationById.pending, (state) => {
        state.getNotificationById.status = StatusResponse.LOADING;
      })
      .addCase(getNotificationById.rejected, (state, { payload }) => {
        state.getNotificationById.status = StatusResponse.ERROR;
        state.getNotificationById.message = payload as string;
      });

    ///put
    builder
      .addCase(updateNotification.fulfilled, (state) => {
        state.updateNotification.status = StatusResponse.SUCCESS;
      })
      .addCase(updateNotification.pending, (state) => {
        state.updateNotification.status = StatusResponse.LOADING;
      })
      .addCase(updateNotification.rejected, (state, { payload }) => {
        state.updateNotification.status = StatusResponse.ERROR;
        state.updateNotification.message = payload as string;
      });

    ///patch
    builder
      .addCase(partiallyUpdateNotification.fulfilled, (state) => {
        state.partiallyUpdateNotification.status = StatusResponse.SUCCESS;
      })
      .addCase(partiallyUpdateNotification.pending, (state) => {
        state.partiallyUpdateNotification.status = StatusResponse.LOADING;
      })
      .addCase(partiallyUpdateNotification.rejected, (state, { payload }) => {
        state.partiallyUpdateNotification.status = StatusResponse.ERROR;
        state.partiallyUpdateNotification.message = payload as string;
      });

    ///delate
    builder
      .addCase(deleteNotification.fulfilled, (state) => {
        state.deleteNotification.status = StatusResponse.SUCCESS;
      })
      .addCase(deleteNotification.pending, (state) => {
        state.deleteNotification.status = StatusResponse.LOADING;
      })
      .addCase(deleteNotification.rejected, (state, { payload }) => {
        state.deleteNotification.status = StatusResponse.ERROR;
        state.deleteNotification.message = payload as string;
      });
  },
});

export default notificationSlice.reducer;
