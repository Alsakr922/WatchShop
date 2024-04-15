import { USER_ACTIONS } from "../actions/types/user.types";

const USER_STATE = {
  users: [] as UserType[],
  authUser: false,
};
export type UserType = {
  userName: string;
  password: string;
  email: string;
};

export const authReducer = (
  state = USER_STATE,
  action: { type: string; payload: UserType }
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.CREATE_USER: {
      const user = {
        userName: payload.userName,
        password: payload.password,
        email: payload.email,
      };
      const newUser = [...state.users];
      const Authing = true
      newUser.push(user);
      console.log(newUser);
      console.log(Authing);
      return {
        ...state,
        users: newUser,
        authUser: Authing,
      };
    }
  }
};
