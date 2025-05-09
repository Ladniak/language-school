import { NavLink } from "react-router-dom"

import HeaderMenu from "../HeaderMenu/HeaderMenu"

import module from "./Header.module.css"

const AppBar = () => {
    return (
        <header className={module.headerLayout}>
            <div className={module.header}>
                <div className={module.navAndLogo}>
                    <div className={module.logo}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#FFDA44" />
                                <path d="M0 14C0 6.26806 6.26806 0 14 0C21.7319 0 28 6.26806 28 14" fill="#338AF3" />
                            </g>
                        </svg>
                        <NavLink to="/">LearnLingo</NavLink>
                    </div>
                    <div className={module.nav}>
                        <NavLink className={module.link} to="/">Home</NavLink>
                        <NavLink className={module.link} to="/teachers">Teachers</NavLink>
                    </div>
                </div>
                <HeaderMenu />
            </div>
        </header>
    )
}

export default AppBar
