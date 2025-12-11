import { GET_NEW_POST } from "../action/homePageActions"

const initialState = {
    postId: ""

}

export const homePageReducer = function (currentState = initialState, action) {

    switch (action.type) {
        case GET_NEW_POST:
            return {
                ...currentState,
                postId: action.payload
            }


        default:
            return currentState
    }


}