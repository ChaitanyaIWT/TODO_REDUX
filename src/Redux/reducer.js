import {
  ADD,
  REMOVE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
} from "./action";

const initialState = {
  count: 10,
  name: "chaitanya",
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {

  switch (action.type) {
    case ADD:
      return { ...oldState, count: oldState.count + 1 };

    case REMOVE:
      return { ...oldState, count: oldState.count - 1 };

    case GET_TODOS_REQUEST:
      return { ...oldState, isLoading: true };

    case GET_TODOS_SUCCESS:
      return { ...oldState, isLoading:false, todos:action.payload };

    case GET_TODOS_FAILURE:
      return { ...oldState, isLoading: false, todos:[], isError:true };
      
    default:
      return oldState;
  }
};

export { reducer };
