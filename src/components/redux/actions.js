import { GetTodos, GetTodosUsers, GetTodosAlbums, GetTodosPhotos, GetTodosComents } from "../api"

const SetTodos = async (dispatch) => {
    const data = await GetTodos();
    console.log(data);
    dispatch({ type: "SET_TODOS", payload: data });
}

const SetTodos2 = async (dispatch) => {
    const data2 = await GetTodosUsers();
    dispatch({ type: "SET_TODOS_USERS", payload: data2 });
}

const SetTodos3 = async (dispatch) => {
    const data3 = await GetTodosAlbums();
    dispatch({ type: "SET_TODOS_ALBUMS", payload: data3 });
}
const SetTodos4 = async (dispatch) => {
    const data3 = await GetTodosPhotos();
    dispatch({ type: "SET_TODOS_PHOTOS", payload: data3 });
}

const SetTodos5 = async (dispatch) => {
    const data3 = await GetTodosComents();
    dispatch({ type: "SET_TODOS_COMENTS", payload: data3 });
}

const headerButton = (dispatch) => {
    dispatch({ type: "BUTTON_SHOW" })

}

export { SetTodos, SetTodos2, SetTodos3, SetTodos4, SetTodos5, headerButton };
