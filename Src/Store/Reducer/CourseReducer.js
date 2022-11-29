import { TOP_COURSES, NEW_COURSES, ALL_COURSES, COURSES_DETAIL, CATEGORY_NAME, SEARCH_COURSES, CURRICULUM_DATA, FAQ_DATA } from "../Actions/type";
const initialState = {
    top_courses: [],
    New_Courses: [],
    all_Courses: [],
    CoursesDetail: {},
    CategoryName: [],
    searchArray: [],
    curriculum_d: [],
    faq_d: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_COURSES:
            return {
                ...state,
                all_Courses: payload,
            };
        case TOP_COURSES:
            return {
                ...state,
                top_courses: payload,
            };
        case NEW_COURSES:
            return {
                ...state,
                New_Courses: payload,
            };
        case COURSES_DETAIL:
            return {
                ...state,
                CoursesDetail: payload,
            };
        case CATEGORY_NAME:
            return {
                ...state,
                CategoryName: payload,
            };
        case SEARCH_COURSES:
            return {
                ...state,
                searchArray: payload,
            };
        case CURRICULUM_DATA:
            return {
                ...state,
                curriculum_d: payload,
            };
        case FAQ_DATA:
            return {
                ...state,
                faq_d: payload,
            };
        default:
            return state;
    }
};