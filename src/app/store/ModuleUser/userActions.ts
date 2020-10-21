import { createAction, props } from '@ngrx/store';
import User from './userModel';

export const GetUserAction = createAction('[user] - Get User');

export const createUserAction = createAction(
    '[user] = Create User',
    props<User>()
);

export const BeginGetUserAction = createAction('[user] - Begin get User');

export const SuccessGetUserAction = createAction(
    '[user] - Success Get User',
    props<{
        payload: User[]
    }>()
);

export const BeginCreateUserAction = createAction(
    '[user] - Begin Create User',
    props<{ payload: User }>()
  );
  
  export const SuccessCreateToDoAction = createAction(
    '[user] - Success Create User',
    props<{ payload: User }>()
  );
  
  export const ErrorToDoAction = createAction('[user] - Error', props<Error>());