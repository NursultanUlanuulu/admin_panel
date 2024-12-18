import { RootState } from "../../../app/store";

export const selectLogin = (state: RootState) => state.auth.login;

export const selectUserRole = (state: RootState) =>
  state.auth.getProfile.user.role;

export const selectUserProfile = (state: RootState) => state.auth.getProfile;
