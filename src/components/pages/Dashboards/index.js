import React from 'react'
import { useParams } from 'react-router-dom'
import Dashboard from '../../containers/Dashboard/Dashboard';
import Todos from '../Todos/todos';
import Users from '../Users/users';
import Albums from '../albums/albums';
import Photos from '../photos/photos';
import Comments from '../coments/coments';


const Dashboards = () => {
    const { menu } = useParams();
    return (
        <Dashboard>

            {menu === "todos" && <Todos /> || ""}
            {menu === "users" && <Users /> || ""}
            {menu === "albums" && <Albums /> || ""}
            {menu === "photos" && <Photos /> || ""}
            {menu === "comments" && <Comments /> || ""}


        </Dashboard>
    )
}

export default Dashboards
