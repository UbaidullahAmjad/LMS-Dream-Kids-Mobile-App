import { apiInstance } from '../../Confiq/AxiosInstances';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rejection } from '../../Confiq/helper';
import { CHANGE_USER_DATA } from './type';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import store from '..';
export const UserLogin = (email, password, checked) => {
    return async dispatch => {
        let result = await apiInstance.post(`user/login?email=${email}&password=${password}`, {
        }).then(function (response) {
            return response
        }).catch(function (error) {
            rejection(error)
            return error.response
        })
        const { status, data } = result
        console.log("##############################", status)
        if (status == 200) {

            if (checked) {
                await AsyncStorage.setItem('UserData', JSON.stringify(data))
            }
            dispatch({ type: CHANGE_USER_DATA, payload: data })

        }
    }
}

export const UserRegister = (name, email, phone, username, password) => {
    return async dispatch => {
        let result = await apiInstance.post(`user/get_register?email=${email}&password=${password}&first_name=${name}&last_name=${username}&phone=${phone}`, {
        }).then(function (response) {
            return response
        }).catch(function (error) {
            rejection(error)
            return error.response
        })
        const { status, data } = result
        if (status == 200) {
            dispatch({ type: CHANGE_USER_DATA, payload: data })
        }
    }
}

export const AlreaadyLogin = () => {
    return async dispatch => {
        const value = await AsyncStorage.getItem('UserData')
        const parse = JSON.parse(value)
        dispatch({ type: CHANGE_USER_DATA, payload: parse })
    }
}
export const LogOut = () => {
    return async dispatch => {
        await AsyncStorage.removeItem('UserData')
        dispatch({ type: CHANGE_USER_DATA, payload: null })

    }
}
export const UpdateParentProfile = (fatherinfo, motherinfo, Parentaddress) => {
    return async dispatch => {
        let result = await apiInstance.post(`user/editparentprofile?id=${store.getState()?.user.userData?.user_data?.id}&father_name=${fatherinfo[0].value}&mother_name=${motherinfo[0].value}&father_mobile=${fatherinfo[1].value}&mother_mobile=${motherinfo[1].value}&father_email=${fatherinfo[3].value}&mother_email=${motherinfo[3].value}&father_dob=${fatherinfo[2].value}&mother_dob=${motherinfo[2].value}&address=${Parentaddress}`, {
        }).then(function (response) {
            return response
        }).catch(function (error) {
            rejection(error)
            return error.response
        })
        const { status, data } = result
        console.log(data)
        if (status == 200) {
            console.log("333", store.getState().user.userData)
            let user = { ...store.getState().user.userData }
            user.parent = data?.parent
            console.log(user)
            dispatch({ type: CHANGE_USER_DATA, payload: user })
            Toast.show({
                type: 'success',
                text1: 'Update Successfully!',
                text2: "Parent Profile Update Successfully"

            });



        }
    }
}
export const UpdateProfile = (info, address, password, editAbout) => {
    return async dispatch => {
        console.log("EEEEEEEEEEEEEEEEEe" , editAbout)

        if (password == null || password == 'null' || password == '') {
            var route = `user/editstudentprofile?id=${store.getState()?.user.userData?.user_data?.id}&password&address=${address}&detail=${editAbout}&dob=${info[0].value}&gender=${info[1].value}&allergy=${info[3].value}&diet_requirement=${info[2].value}&date_of_enrollment=${info[4].value}&date_of_withdraw=${info[5].value}`
        }
        else {
            var route = `user/editstudentprofile?id=${store.getState()?.user.userData?.user_data?.id}&password=${password}&address=${address}&detail=${editAbout}&dob=${info[0].value}&gender=${info[1].value}&allergy=${info[3].value}&diet_requirement=${info[2].value}&date_of_enrollment=${info[4].value}&date_of_withdraw=${info[5].value}`
        }
        let result = await apiInstance.post(route, {
        }).then(function (response) {
            return response
        }).catch(function (error) {
            rejection(error)
            return error.response
        })
        const { status, data } = result
        console.log(data)
        if (status == 200) {
            console.log("333", store.getState().user.userData)
            let user = { ...store.getState().user.userData }
            user.user_data = data?.user
            console.log(user)
            dispatch({ type: CHANGE_USER_DATA, payload: user })
            Toast.show({
                type: 'success',
                text1: 'Update Successfully!',
                text2: "Profile Update Successfully"

            });



            }
        }
    }