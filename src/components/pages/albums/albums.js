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
            <table className=' table-primary table-hover'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>UserId</th>
                        <th>Title</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(v =>
                        <tr key={v.id} class="table-primary trinf">
                            <td >
                                <p className='idStyle'>{v.id}</p>
                            </td>
                            <td><p>{v.userId}</p></td>
                            <td><p>{v.title}</p></td>
                        </tr>
                    )}

                </tbody>
            </table>


        </PhotosWrappr>
    )
}

export default Albums;
