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
            <table className=' table-primary table-hover'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(v =>
                        <tr key={v.id} class="table-primary trinf">
                            <td >
                                <p className='idStyle'>{v.id}</p>
                            </td>
                            <td><p>{v.name}</p></td>
                            <td><p>{v.email}</p></td>
                            <td><p>{v.body}</p></td>
                        </tr>
                    )}

                </tbody>
            </table>


        </PhotosWrappr>
    )
}

export default Comments;
