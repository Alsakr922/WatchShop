import { UserType } from "../reducers/auth.reducer";
import { USER_ACTIONS } from "./types/user.types";

export const create_user = (user: UserType) => {
  return {
    type: USER_ACTIONS.CREATE_USER,
    payload: user,
  };
};
