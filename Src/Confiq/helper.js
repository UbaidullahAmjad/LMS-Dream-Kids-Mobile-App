import Toast from 'react-native-toast-message';
export function emailValidation(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    }
    else {
        return false
    }
}
export function otherStatus(res) {
   
    if (res.status == 400) {
        Toast.show({
            type: 'error',
            text1: 'Sorry!',
            text2: res.data.message

        });
    }
    else if (res.status == 401) {
        Toast.show({
            type: 'error',
            text1: 'Sorry!',
            text2: res.data.message

        });
    }
    else if (res.status == 403) {
        Toast.show({
            type: 'error',
            text1: 'Sorry!',
            text2: res.data.message

        });
    }

}
export function rejection(error, dispatch) {
    if (error.message === 'Network Error') {
        Toast.show({
            type: 'error',
            text1: 'Internet!',
            text2: "Kindly Check Your Internet Connection"

        });
    }
}
