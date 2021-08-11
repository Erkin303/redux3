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
            <div className='border3'>
                <table className=' table-primary table-hover'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>albumId</th>
                            <th>title</th>
                            <th>imgurl</th>
                            <th>thumbnailUrl</th>

                        </tr>
                    </thead>

                    <tbody>
                        {data.map(v =>
                            <tr key={v.id} class="table-primary trinf">
                                <td >
                                    <p className='idStyle'>{v.id}</p>
                                </td>
                                <td><p>{v.albumId}</p></td>
                                <td><p>{v.title}</p></td>
                                <td><div className='img1'><img src={v.url} alt="" className='img2' /></div></td>
                                <td><div className='img3'><img src={v.thumbnailUrl} alt="" className='img2' /></div></td>

                            </tr>
                        )}

                    </tbody>
                </table>
            </div>


        </PhotosWrappr>
    )
}

export default Photos;
