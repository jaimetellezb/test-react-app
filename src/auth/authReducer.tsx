import { types } from "../types";

type AuthAction =
  | { type: "[auth] Login"; payload: AuthState }
  | { type: "[auth] Logout"; payload: AuthState };

export interface AuthState {
  name: string;
  logged: boolean;
}

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        name: "",
        logged: false,
      };
    default:
      return state;
  }
};
