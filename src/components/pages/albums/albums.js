import React, { useEffect } from 'react';
import PhotosWrappr from '../photos/photosW';
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos3 } from '../../redux/actions';


const Albums = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos3(dispatch);
    }, []);

    const data = useSelector(state => state.albums);
    return (
        <PhotosWrappr>
            <h1 className='mainword'>Albums</h1>
            <div className="row">
                {data.map((v, i) => {
                    return <div className="col-md-4 col-lg-3 col-sm-6 mb-2">
                        <div className='todosCard' >
                            <p><span className='fw-bold'>{v.id}</span></p>
                            <p>Title: {v.title}</p>

                        </div>
                    </div>
                })}
            </div>

        </PhotosWrappr>
    )
}

export default Albums;
