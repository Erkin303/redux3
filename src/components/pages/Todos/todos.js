import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetTodos } from '../../redux/actions';
import PhotosWrappr from '../photos/photosW';

const Todos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        SetTodos(dispatch);
    }, []);

    const data = useSelector(state => state.todos);

    return (
        <PhotosWrappr>
            <h1 className='mainword'>Todos</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>UserId</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>

                    </thead>

                    <tbody>
                        {data.map(v =>
                            <tr key={v.id} className='trinf'>
                                <td >
                                    <p>{v.id}</p>
                                </td>
                                <td><p>{v.userId}</p></td>
                                <td><p>{v.title}</p></td>
                                <td> <p>{`${v.completed}`}</p></td>
                            </tr>
                        )}

                    </tbody>
                </table>


            </div>

        </PhotosWrappr>
    )
}

export default Todos
