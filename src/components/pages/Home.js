import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../containers/Dashboard/Dashboard'
import HomeWrappr from './HomeWrapper'

const dataHome = [
    { to: "users", component: "Users" },
    { to: "todos", component: "Todos" },
    { to: "albums", component: "Albums" },
    { to: "photos", component: "Photos" },
    { to: "comments", component: "Comments" }
]

const Home = () => {
    return (
        <Dashboard>
            <HomeWrappr>
                <div className="row">
                    {/* <h1 className='homesozz'>Home</h1> */}

                    {dataHome.map((v, i) => {
                        return <div className="col-md-4 col-sm-12">
                            <Link to={`/dashboard/${v.to}`}>
                                <div className='shadow p-3 homeCard' data-aos="zoom-in-down" data-aos-delay={`${100 + i * 150}`}>
                                    {v.component}
                                </div>
                            </Link>
                        </div>
                    })}

                </div>

            </HomeWrappr>
        </Dashboard>

    )
}

export default Home
