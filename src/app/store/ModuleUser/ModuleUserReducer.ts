import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './userActions';
import User from './userModel';
import {UserState} from './userState';

const initialState: UserState = {
  users: [
    {
      avatar: './',
      username:  'thaibinhblack',
      name: 'Nguyễn thái bình',
      birthday: '29/09/1996',
      email: 'thaibinhblack@gmail.com'
    }
  ],
  count: 0,
  userError: null
};

const reducer = createReducer(
  initialState,
  on(UserActions.GetUserAction, state => state),
  on(UserActions.createUserAction, (state: UserState, user: User) => {
    return { ...state, users: [...state.users, User], userError: null };
  }),
  on(UserActions.SuccessGetUserAction, (state: UserState, { payload }) => {
    return { ...state, users: payload };
  }),
  on(UserActions.SuccessCreateToDoAction, (state: UserState, { payload }) => {
    return { ...state, users: [...state.users, payload], userError: null };
  }),
  on(UserActions.ErrorToDoAction, (state: UserState, error: Error) => {
    console.log(error);
    return { ...state, userError: error };
  })
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}