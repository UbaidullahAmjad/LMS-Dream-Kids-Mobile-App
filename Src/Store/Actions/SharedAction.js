import { apiInstance } from '../../Confiq/AxiosInstances';
import { CHANGE_LOADER } from './type';
export const Change_Loading = (value) => {
    return async dispatch => {
        dispatch({ type: CHANGE_LOADER, payload: value })
    }
}