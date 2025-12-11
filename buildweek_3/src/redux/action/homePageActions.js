export const GET_NEW_POST = "GET_NEW_POST"

export const addNewPost = function (_payload) {
    return {
        type: GET_NEW_POST,
        payload: _payload,
    }

}