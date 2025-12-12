export const ADD_NEW_IMG = "ADD_NEW_IMG"
export const ADD_EXP_ID = "ADD_EXP_ID"
export const ADD_POST_ID = "ADD_POST_ID"

export const newImg = function (_payload) {
    return {
        type: ADD_NEW_IMG,
        payload: _payload,
    }
}

export const addExpId = function (_payload) {
    return {
        type: ADD_EXP_ID,
        payload: _payload,
    }
}

export const addPostId = function (_payload) {
    return {
        type: ADD_POST_ID,
        payload: _payload,
    }
}