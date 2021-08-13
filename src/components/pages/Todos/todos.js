import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos } from '../../redux/actions';
import PhotosWrappr from '../photos/photosW';
import { FcLike, FcDislike } from "react-icons/fc";

const Todos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos(dispatch);
    }, []);

    const data = useSelector(state => state.todos);

    return (
        <PhotosWrappr>
            <h1 className='mainword'>Todos</h1>
            <div className="row">
                {data.map((v, i) => {
                    return <div className="col-md-4 col-lg-3 col-sm-6 mb-2">
                        <div className='todosCard' >
                            <p><span className='fw-bold'>{v.id}</span></p>
                            <p>Title: {v.title}</p>
                            <p> Completed:
                                <span className={`${v.completed ? "d-inline-block text-danger ms-1" : "d-none"}`}><FcLike /></span>
                                <span className={`${v.completed ? "d-none" : "d-inline-block  text-danger ms-1"}`}><FcDislike /></span>
                            </p>

                        </div>
                    </div>
                })}
            </div>


        </PhotosWrappr>
    )
}

export default Todos
