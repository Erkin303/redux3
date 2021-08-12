import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../containers/Dashboard/Dashboard'
import HomeWrappr from './HomeWrapper'

const Home = () => {
    return (
        <Dashboard>
            <HomeWrappr>
                <div className="row">
                    {/* <h1 className='homesozz'>Home</h1> */}
                    <div className="col-md-4 col-sm-12">
                        <Link to="/dashboard/users">
                            <div className='shadow p-3 homeCard' data-aos="zoom-in-down" data-aos-delay="100">
                                Users
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <Link to="/dashboard/todos">
                            <div className='shadow p-3 homeCard' data-aos="zoom-in-down" data-aos-delay="300">
                                Todos
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <Link to="/dashboard/albums">
                            <div className='shadow p-3 homeCard' data-aos="zoom-in-down" data-aos-delay="500">
                                Albums
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <Link to="/dashboard/photos">
                            <div className='shadow p-3 homeCard' data-aos="zoom-in-down" data-aos-delay="700">
                                Photos
                            </div>
                        </Link>

                    </div>

                    <div className="col-md-4 col-sm-6">
                        <Link to="/dashboard/comments">
                            <div className='shadow p-3 homeCard' data-aos="zoom-in-down" data-aos-delay="900">
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
