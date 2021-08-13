const axios = require('axios');

const GetTodos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}

const GetTodosUsers = async () => {
    try {
        const res2 = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=10`);
        console.log(res2.data);
        return res2.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}

const GetTodosAlbums = async () => {
    try {
        const res3 = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=10`);
        console.log(res3.data);
        return res3.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}

const GetTodosPhotos = async () => {
    try {
        const res3 = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        console.log(res3.data);
        return res3.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}

const GetTodosComents = async () => {
    try {
        const res3 = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=10`);
        console.log(res3.data);
        return res3.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}


export { GetTodos, GetTodosUsers, GetTodosAlbums, GetTodosPhotos, GetTodosComents }