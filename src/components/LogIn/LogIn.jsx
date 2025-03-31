import { useEffect } from "react";
import module from "./LogIn.module.css"

const LogIn = ({ onClose }) => {

    const handleEscape = event => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div className={module.modal} onClick={onClose}>
            <div className={module.container} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={module.closeBtn}>
                    <svg className={module.icon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 8L8 24" stroke="#121417" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 8L24 24" stroke="#121417" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <form id="form" className={module.form}>
                    <h1 className={module.header}>Log In</h1>
                    <p className={module.par}>
                        Welcome back! Please enter your credentials to
                        access your account and continue your search for an teacher.
                    </p>
                    <input type="text" placeholder="Email" className={module.inputEm} />
                    <input type="text" placeholder="Email" className={module.inputPs} />
                </form>
                <button form="form" className={module.btn}>Log In</button>
            </div>
        </div >
    )
}

export default LogIn