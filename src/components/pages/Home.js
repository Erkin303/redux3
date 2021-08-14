import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../containers/Dashboard/Dashboard'
import HomeWrappr from './HomeWrapper'

import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiArchive } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { CgAlbum } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaRegComments } from "react-icons/fa";


const dataHome = [
    { to: "users", component: "Users", ri: <FiUsers /> },
    { to: "todos", component: "Todos", ri: <BiArchive /> },
    { to: "albums", component: "Albums", ri: <CgAlbum /> },
    { to: "photos", component: "Photos", ri: <HiOutlinePhotograph /> },
    { to: "comments", component: "Comments", ri: <FaRegComments /> }
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
                                    <p className='fs-2 text-center text-light'>{v.ri} </p>
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
