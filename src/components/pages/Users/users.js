import React, { useEffect } from 'react';
import PhotosWrappr from '../photos/photosW';
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos2 } from '../../redux/actions';

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos2(dispatch);
    }, []);

    const data = useSelector(state => state.users);
    return (
        <PhotosWrappr>
            <h1 className='mainword'>Users</h1>
            <table className=' table-primary table-hover'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(v =>
                        <tr key={v.id} class="table-primary trinf">
                            <td >
                                <p className='idStyle'>{v.id}</p>
                            </td>
                            <td><p>{v.name}</p></td>
                            <td><p>{v.username}</p></td>
                            <td><p>{v.email}</p></td>
                            <td><p>{v.address.city}</p></td>
                            <td><p>{v.address.zipcode}</p></td>
                        </tr>
                    )}

                </tbody>
            </table>


        </PhotosWrappr>
    )
}

export default Users;
