import { GET_CONTENT, GET_NEW_POST } from "../action/homePageActions"

const initialState = {
    postId: "",
    contenutoPost: ""
}

export const homePageReducer = function (currentState = initialState, action) {

    switch (action.type) {
        case GET_NEW_POST:
            return {
                ...currentState,
                postId: action.payload
            }
        case GET_CONTENT:
            return {
                ...currentState,
                contenutoPost: action.payload
            }

        default:
            return currentState
    }


}