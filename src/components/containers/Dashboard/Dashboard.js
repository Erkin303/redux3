import React from 'react'
import { Link } from 'react-router-dom'
import DashboradWrappr from './DashboardWrapper'

const Dashboard = ({ children }) => {
    const state = useSelector(state => state.state)

    return (
        <DashboradWrappr>
            <div className="sidebar">
                <div className="d-flex justify-content-center">
                    <ul className='w-100'>
                        <li><Link to="/"><p>Home</p></Link></li>
                        <li><Link to="/dashboard/users"><div><p>Users</p></div></Link></li>
                        <li><Link to="/dashboard/todos"><div><p>Todos</p></div></Link></li>
                        <li><Link to="/dashboard/albums"><div><p>Albums</p></div></Link></li>
                        <li><Link to="/dashboard/photos"><div><p>Photos</p></div></Link></li>
                        <li><Link to="/dashboard/comments"><div><p>Comments</p></div></Link></li>
                    </ul>
                </div>

            </div>
            <div className="rightSide">
                <header>
                    <div className='d-flex align-items-center'>
                        <img src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png" alt="" />

                    </div>
                    <div className='d-flex align-items-center'>
                        <ul>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Abote</a></li>
                            <li><a href="#">Information</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    <button className='btn'>Light</button>
                </header>
                <div className="content">
                    {children}
                </div>

            </div>


        </DashboradWrappr>
    )
}

export default Dashboard
