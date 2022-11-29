
import { CHANGE_LOADER , CHANGE_PAGE_LOADER} from "../Actions/type";
const initialState = {
    Loader: null,
    PageLoader: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_LOADER:
            return {
                ...state,
                Loader: payload,
            };
        case CHANGE_PAGE_LOADER:
            return {
                ...state,
                PageLoader: payload,
            };

        default:
            return state;
    }
};