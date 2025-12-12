import { ADD_EXP_ID, ADD_NEW_IMG, ADD_POST_ID } from "../action/addIMGAction"



const initialState = {
    fetchUrl: "",
    expID: "",
    postId: "",
}



export const addImageReducer = function (currentState = initialState, action) {

    switch (action.type) {

        case ADD_NEW_IMG:
            return {
                ...currentState,
                fetchUrl: action.payload,

            }
        case ADD_EXP_ID:
            return {
                ...currentState,
                expID: action.payload,
            }
        case ADD_POST_ID:
            return {
                ...currentState,
                postId: action.payload,
            }
        default:
            return currentState

    }

}

