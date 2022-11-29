import { CHANGE_MY_COURSES , CHANGE_PAGE_LOADER } from './type'
import { apiInstanceWIthOutLoader } from '../../Confiq/AxiosInstances'
import store from '..'

export const MyCoursesftn = () => {
    return async dispatch => {
        let userId = store.getState()?.user?.userData?.user_data?.id
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        let result = await apiInstanceWIthOutLoader.post(`user/mycourses?id=${userId}`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })
        const { status, data } = result
       
        if (status == 200) {
            dispatch({ type: CHANGE_MY_COURSES, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
    }
}