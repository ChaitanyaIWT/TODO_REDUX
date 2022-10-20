

export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const POST_TODO_REQUEST = "POST_TODO_REQUEST";
export const POST_TODO_SUCCESS = "POST_TODO_SUCCESS";
export const POST_TODO_FAILURE = "POST_TODO_FAILURE";


export const getTodoRequest = ()=>{
    return {
        type: GET_TODOS_REQUEST
    }
}

export const getTodoSuccess = (payload)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload
    }
}

export const getTodoFailure = ()=>{
    return {
        type: GET_TODOS_FAILURE
    }
}
// post 
export const postTodoRequest = ()=>{
    return {
        type: POST_TODO_REQUEST
    }
}

export const postTodoSuccess = (payload)=>{
    return {
        type: POST_TODO_SUCCESS,
        payload
    }
}

export const postTodoFailure = ()=>{
    return {
        type: POST_TODO_FAILURE
    }
}





