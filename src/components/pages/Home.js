import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../containers/Dashboard/Dashboard'
import HomeWrappr from './HomeWrapper'

const Home = () => {
    return (
        <Dashboard>
            <HomeWrappr>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <Link to="/dashboard/users">
                            <div className='shadow p-3 homeCard'>
                                Users
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Link to="/dashboard/todos">
                            <div className='shadow p-3 homeCard'>
                                Todos
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Link to="/dashboard/albums">
                            <div className='shadow p-3 homeCard'>
                                Albums
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Link to="/dashboard/photos">
                            <div className='shadow p-3 homeCard'>
                                Photos
                            </div>
                        </Link>

                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Link to="/dashboard/comments">
                            <div className='shadow p-3 homeCard'>
                                Comments
                            </div>
                        </Link>

                    </div>



                </div>

            </HomeWrappr>
        </Dashboard>

    )
}

export default Home
