import { CHAT_HISTORY } from "../Actions/type";
const initialState = {
    ChatHistoryArray: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHAT_HISTORY:
            return {
                ...state,
                ChatHistoryArray: payload,
            };
        default:
            return state;
    }
};