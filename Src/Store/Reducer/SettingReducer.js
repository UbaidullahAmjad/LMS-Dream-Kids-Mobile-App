
import { CHANGE_MY_COURSES } from "../Actions/type";
const initialState = {
    MyCourses: []
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_MY_COURSES:
            return {
                ...state,
                MyCourses: payload,
            };
        default:
            return state;
    }
};