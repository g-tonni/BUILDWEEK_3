export const GET_NEW_POST = "GET_NEW_POST"
export const GET_CONTENT = "GET_CONTENT"


export const addNewPost = function (_payload) {
    return {
        type: GET_NEW_POST,
        payload: _payload,
    }

}

export const cambiaContenuto = function (_payload) {
    return {

        type: GET_CONTENT,
        payload: _payload,
    }

}