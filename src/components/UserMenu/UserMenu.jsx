import { useState } from "react"

import module from "./UserMenu.module.css"

import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";

const UserMenu = () => {
    const [openLogInModal, setOpenLogInModal] = useState(false);
    const [openRegModal, setOpenRegModal] = useState(false);

    const onCloseLogIn = () => {
        setOpenLogInModal(false)
    }

    const onCloseReg = () => {
        setOpenRegModal(false)
    }

    return (
        <>
            <div className={module.userMenu}>
                <button onClick={() => setOpenLogInModal(true)} className={module.logBtn}>
                    <svg className={module.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33333 5.83334L12.5 10M12.5 10L8.33333 14.1667M12.5 10L2.5 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={module.span}>
                        Log in
                    </span>
                </button>
                <button onClick={() => setOpenRegModal(true)} className={module.regBtn}>Registration</button>
            </div>
            {openLogInModal && <LogIn onClose={onCloseLogIn} />}
            {openRegModal && <Register onClose={onCloseReg} />}
        </>
    )
}

export default UserMenu