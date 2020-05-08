  
import { combineReducers } from 'redux';
import usersReduce  from './users/users.reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  authReducer, routerReducer, contactsReducer, chatsReducer, messagesReducer, userProfileReducer
});