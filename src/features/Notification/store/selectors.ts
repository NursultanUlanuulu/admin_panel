import { RootState } from "../../../app/store";

export const selectNotification = (state: RootState) =>
  state.notification.notification;

export const selectGetNotificationStatus = (state: RootState) =>
  state.notification.getNotification.status;

export const selectCreateNotificationStatus = (state: RootState) =>
  state.notification.createNotification.status;

export const selectUpdateNotificationStatus = (state: RootState) =>
  state.notification.updateNotification.status;

export const selectPartiallyUpdateNotificationStatusPatch = (
  state: RootState
) => state.notification.updateNotification.status;

export const selectDeleteNotificationStatus = (state: RootState) =>
  state.notification.deleteNotification.status;
