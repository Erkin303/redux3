import React, { useEffect } from 'react';
import PhotosWrappr from './photosW'
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos4 } from '../../redux/actions';

const Photos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos4(dispatch);
    }, []);

    const data = useSelector(state => state.photos);
    return (
        <PhotosWrappr>
            <h1 className='mainword'>Photos</h1>
            <div className="row">
                {data.map((v, i) => {
                    return <div className="col-md-4 col-lg-3 col-sm-6 mb-2">
                        <div className='photosCard' >
                            <div>
                                <p><span className='fw-bold'>{v.id}</span></p>
                                <p>Title: {v.title}</p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img src={v.url} alt="" className='imgUrl' />
                            </div>

                        </div>
                    </div>
                })}
            </div>



        </PhotosWrappr>
    )
}

export default Photos;
