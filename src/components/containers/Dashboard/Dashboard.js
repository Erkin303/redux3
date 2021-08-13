import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DashboradWrappr from './DashboardWrapper'
import ThemeG from './../../theme'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiArchive } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { CgAlbum } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaRegComments } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { headerButton } from '../../redux/actions'










const dataDashboard = [
    { to: "/", component: "Home", exact: true, ri: <AiOutlineHome /> },
    { to: "/dashboard/users", component: "Users", ri: <FiUsers /> },
    { to: "/dashboard/todos", component: "Todos", ri: <BiArchive /> },
    { to: "/dashboard/albums", component: "Albums", ri: <CgAlbum /> },
    { to: "/dashboard/photos", component: "Photos", ri: <HiOutlinePhotograph /> },
    { to: "/dashboard/comments", component: "Comments", ri: <FaRegComments /> },

]


const Dashboard = ({ children }) => {
    const { theme, Toggletheme } = useContext(ThemeG)
    console.log(theme, Toggletheme);
    const dispatch = useDispatch();

    const show = useSelector(state => state.headerButton)

    useEffect(() => {
        Aos.init();

    })


    return (
        <DashboradWrappr>
            <div className={`sidebar ${show && "show" || ""}`}>
                <div className="d-flex justify-content-center" >
                    <ul className={`${show && "d-block" || 'd-none'}`}>
                        {dataDashboard.map((v, i) => {
                            return <li >
                                <div data-aos-delay={`${100 + i * 150}`} data-aos="fade-right" >
                                    <Link to={v.to} exact={v.exact}><div><p className='forHover'> {v.ri}  <span className="sidebarWords">{v.component}</span></p></div>
                                    </Link>
                                </div>
                            </li>
                        })}

                    </ul>
                </div>

            </div>
            <div className="rightSide">
                <header>
                    <div className='d-flex align-items-center' data-aos="fade-left">
                        <button onClick={() => headerButton(dispatch)} className='btn btn-dark'><BsList /></button>
                        <img src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png" alt="" />

                    </div>
                    <div className='d-flex align-items-center' data-aos="fade-left">
                        <ul>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Abote</a></li>
                            <li><a href="#">Information</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </div>
                    {/* <button onClick={Toggletheme} className={`ms-1 btn btn-${theme == "light" ? "light" : "dark"}`} >{theme == "light" ? "Light" : "Dark"} </button> */}
                </header>
                <div className="content">
                    {children}
                </div>

            </div>


        </DashboradWrappr>
    )
}

export default Dashboard
