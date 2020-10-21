import User from './userModel';

export interface  UserState {
    users: Array<User>;
    userError: Error;
    count: number;
}
