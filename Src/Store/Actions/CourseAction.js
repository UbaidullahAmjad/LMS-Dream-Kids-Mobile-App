import { apiInstanceWIthOutLoader } from '../../Confiq/AxiosInstances';
import { TOP_COURSES, NEW_COURSES, ALL_COURSES, COURSES_DETAIL, CHANGE_PAGE_LOADER, CATEGORY_NAME, SEARCH_COURSES, CURRICULUM_DATA, FAQ_DATA } from './type';
import { rejection } from '../../Confiq/helper';
import store from '..';

export const AllCourses = () => {
    return async dispatch => {
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })

        // All Courses fetch
        let result = await apiInstanceWIthOutLoader.get(`user/allcourses`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })
        const { status, data } = result
        if (status == 200) {
            dispatch({ type: ALL_COURSES, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })

        // Category Name fetch
        let categories = await apiInstanceWIthOutLoader.get(`user/topCategory`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })

        if (categories.status == 200) {
            dispatch({ type: CATEGORY_NAME, payload: categories.data.data })
        }
    }
}
export const CoursesDetail = (id) => {
    return async dispatch => {
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        let result = await apiInstanceWIthOutLoader.post(`user/courseDetails?id=${id}`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })
        const { status, data } = result
        if (status == 200) {
            dispatch({ type: COURSES_DETAIL, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
    }
}
export const SearchCourses = (searchText) => {
    return async dispatch => {
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        let userId = store.getState()?.user?.userData?.user_data?.id
        let result = await apiInstanceWIthOutLoader.post(`user/searchcourse?id=${userId}&search=${searchText}`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
                rejection(error)
                return error.response
            })
        const { status, data } = result
        if (status == 200) {
            dispatch({ type: SEARCH_COURSES, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
    }
}
export const HomeTopNewCourses = () => {
    return async dispatch => {
        // Top Courses
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        let result = await apiInstanceWIthOutLoader.get(`user/topCourses`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
                rejection(error)
                return error.response
            })
        const { status, data } = result
        if (status == 200) {
            dispatch({ type: TOP_COURSES, payload: data.data })
        }

        // New Courses
        let NewCourses = await apiInstanceWIthOutLoader.get(`user/newCourses`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
                rejection(error)
                return error.response
            })
        if (NewCourses.status == 200) {
            dispatch({ type: NEW_COURSES, payload: NewCourses.data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })


    }
}
export const CurriculumData = () => {
    return async dispatch => {
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        let userId = store.getState()?.user?.userData?.user_data?.id
        let result = await apiInstanceWIthOutLoader.post(`user/course_curriculum?id=${userId}`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })
        const { status, data } = result

        console.log('curriculum: ', result)
        if (status == 200) {
            dispatch({ type: CURRICULUM_DATA, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
    }
}
export const FAQData = () => {
    return async dispatch => {
        dispatch({ type: CHANGE_PAGE_LOADER, payload: true })
        let result = await apiInstanceWIthOutLoader.get(`user/faqs`, {
        }).then(response => ({ status: response.status, data: response.data }))
            .catch(function (error) {
                rejection(error)
                return error.response
            })
        const { status, data } = result

        console.log('FAQ: ', result)
        if (status == 200) {
            dispatch({ type: FAQ_DATA, payload: data.data })
        }
        dispatch({ type: CHANGE_PAGE_LOADER, payload: false })
    }
}

