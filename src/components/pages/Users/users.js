import React, { useEffect } from 'react';
import PhotosWrappr from '../photos/photosW';
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos2 } from '../../redux/actions';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos2(dispatch);
    }, []);

    useEffect(() => {
        Aos.init();

    })

    const data = useSelector(state => state.users);
    return (
        <PhotosWrappr>
            <h1 className='mainword'>Users</h1>
            <div className="row">

                {data.map((v, i) => {
                    return <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                        <div className='usersCard' >
                            <p>{v.id}. {v.name} {v.username}</p>
                            <p>Email: <a href={v.email}>{v.email}</a></p>
                            <p>City: {v.address.city}</p>
                            <p>Street: {v.address.street}</p>
                            <p>Suite: {v.address.suite}</p>
                        </div>
                    </div>
                })}

            </div>



        </PhotosWrappr>
    )
}

export default Users;
