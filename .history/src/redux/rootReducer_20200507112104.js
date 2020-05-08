  
import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  authReducer, routerReducer, contactsReducer, chatsReducer, messagesReducer, userProfileReducer
});