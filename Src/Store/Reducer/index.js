import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import SharedReducer from './SharedReducer';
import CourseReducer from './CourseReducer';
import ChatReducer from './ChatReducer';
import SettingReducer from './SettingReducer';

export default combineReducers({
    user: UserReducer,
    Shared: SharedReducer,
    Course: CourseReducer,
    Chat: ChatReducer,
    Setting:SettingReducer
});
