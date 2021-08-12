import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DashboradWrappr from './DashboardWrapper'
import ThemeG from './../../theme'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Dashboard = ({ children }) => {
    const { theme, Toggletheme } = useContext(ThemeG)
    console.log(theme, Toggletheme);

    useEffect(() => {
        Aos.init();

    })


    return (
        <DashboradWrappr>
            <div className="sidebar">
                <div className="d-flex justify-content-center" >
                    <ul className='w-100'>

                        <li><div data-aos-delay="100" data-aos="fade-right"><Link to="/"><div><p>Home</p></div></Link></div></li>
                        <li><div data-aos-delay="300" data-aos="fade-right"><Link to="/dashboard/users"><div><p>Users</p></div></Link></div></li>
                        <li><div data-aos-delay="500" data-aos="fade-right"><Link to="/dashboard/todos"><div><p>Todos</p></div></Link></div></li>
                        <li><div data-aos-delay="700" data-aos="fade-right"><Link to="/dashboard/albums"><div><p>Albums</p></div></Link></div></li>
                        <li><div data-aos-delay="900" data-aos="fade-right"><Link to="/dashboard/photos"><div><p>Photos</p></div></Link></div></li>
                        <li><div data-aos-delay="1100" data-aos="fade-right"><Link to="/dashboard/comments"><div><p>Comments</p></div></Link></div></li>
                    </ul>
                </div>

            </div>
            <div className="rightSide">
                <header>
                    <div className='d-flex align-items-center' data-aos="fade-left">
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
