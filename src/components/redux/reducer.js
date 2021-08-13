import initialState from "./initialState";

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODOS": return { ...state, todos: action.payload };

        case "SET_TODOS_USERS": return { ...state, users: action.payload };
        case "SET_TODOS_ALBUMS": return { ...state, albums: action.payload };
        case "SET_TODOS_PHOTOS": return { ...state, photos: action.payload };
        case "SET_TODOS_COMENTS": return { ...state, comments: action.payload };
        case "BUTTON_SHOW": return { ...state, headerButton: !state.headerButton }






        default: return state;

    }
}
export default Reducer;