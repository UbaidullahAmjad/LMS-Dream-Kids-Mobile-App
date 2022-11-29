import store from '..';
import { apiInstanceWIthOutLoader } from '../../Confiq/AxiosInstances';
import { rejection } from '../../Confiq/helper';
import { CHANGE_PAGE_LOADER, CHAT_HISTORY } from './type';

export const ChatHistory = () => {
    return async dispatch => {
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        // Chat fetch
        let userId = store.getState()?.user?.userData?.user_data?.id
        let result = await apiInstanceWIthOutLoader.post(`https://lms.royaldonuts.xyz/api/user/chathistory?id=${userId}`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })
        const { status, data } = result
        console.log("chat result: ", result)
        if (status == 200) {
            dispatch({ type: CHAT_HISTORY, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
    }
}

