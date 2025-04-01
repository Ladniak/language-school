import module from "./PrivateMenu.module.css"

import { NavLink } from "react-router-dom"
import { logout } from "../../redux/auth/slice"
import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors"
import { getAuth, signOut } from "firebase/auth"

const PrivateMenu = () => {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <div className={module.menuDiv}>
            <NavLink className={module.link} to="/favourites">
                <svg className={module.icon} width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5766 4.99419C22.0233 4.44061 21.3663 4.00147 20.6433 3.70187C19.9202 3.40226 19.1452 3.24805 18.3625 3.24805C17.5798 3.24805 16.8047 3.40226 16.0817 3.70187C15.3586 4.00147 14.7016 4.44061 14.1483 4.99419L13 6.14252L11.8516 4.99419C10.734 3.87652 9.21809 3.24863 7.63747 3.24863C6.05685 3.24863 4.54097 3.87652 3.4233 4.99419C2.30563 6.11186 1.67773 7.62774 1.67773 9.20836C1.67773 10.789 2.30563 12.3049 3.4233 13.4225L4.57163 14.5709L13 22.9992L21.4283 14.5709L22.5766 13.4225C23.1302 12.8692 23.5693 12.2122 23.869 11.4892C24.1686 10.7661 24.3228 9.99105 24.3228 9.20836C24.3228 8.42566 24.1686 7.65064 23.869 6.92756C23.5693 6.20448 23.1302 5.54751 22.5766 4.99419Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={module.btnName}>{userName}</span>
            </NavLink>
            <button onClick={handleLogout} className={module.btn}>Log out</button>
        </div>
    )
}

export default PrivateMenu