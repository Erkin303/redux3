import React, { useEffect } from 'react';
import PhotosWrappr from '../photos/photosW';
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos5 } from '../../redux/actions';


const Comments = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos5(dispatch);
    }, []);

    const data = useSelector(state => state.comments);
    return (
        <PhotosWrappr>
            <h1 className='mainword'>Comments</h1>
            <div className="row">
                {data.map((v, i) => {
                    return <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                        <div className='commentsCard' >
                            <p>{v.id}. {v.name}</p>
                            <p>Email: <a href={v.email}>{v.email}</a></p>
                            <p>Body:  {v.body}</p>

                        </div>
                    </div>
                })}
            </div>

        </PhotosWrappr>
    )
}

export default Comments;
