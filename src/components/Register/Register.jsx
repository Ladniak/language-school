import module from "./Register.module.css"

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { registerOp } from "../../redux/auth/operations";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = ({ onClose }) => {

    const schema = yup.object().shape({
        displayName: yup.string().min(3).max(20).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        dispatch(registerOp(data))
        onClose();
    }

    const handleEscape = event => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const handleShow = () => {
        setShow(!show);
    }

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
                <form id="form" onSubmit={handleSubmit(onSubmit)} className={module.form}>
                    <h1 className={module.header}>Registration</h1>
                    <p className={module.par}>
                        Thank you for your interest in our platform!
                        In order to register, we need some information.
                        Please provide us with the following information
                    </p>
                    <div className={module.errorDiv}>
                        <input type="text" placeholder="Name" {...register('displayName')} className={module.inputNm} />
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className={module.errorDiv1}>
                        <input type="text" placeholder="Email" {...register('email')} className={module.inputEm} required />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className={module.btnDiv}>
                        <div className={module.errorDiv2}>
                            <input type={show ? "text" : "password"} placeholder="Password" {...register('password')} autoComplete="on" className={module.inputPs} required />
                            <p>{errors.password?.message}</p>
                        </div>
                        <label className={module.btnLabel} onClick={handleShow}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4_621)">
                                    <path d="M14.9499 14.9499C13.5254 16.0358 11.7908 16.6373 9.99992 16.6666C4.16659 16.6666 0.833252 9.99994 0.833252 9.99994C1.86983 8.06819 3.30753 6.38045 5.04992 5.04994M8.24992 3.53327C8.82353 3.39901 9.41081 3.33189 9.99992 3.33327C15.8333 3.33327 19.1666 9.99994 19.1666 9.99994C18.6607 10.9463 18.0575 11.8372 17.3666 12.6583M11.7666 11.7666C11.5377 12.0122 11.2617 12.2092 10.955 12.3459C10.6484 12.4825 10.3173 12.556 9.98166 12.5619C9.64599 12.5678 9.31256 12.5061 9.00126 12.3803C8.68997 12.2546 8.40719 12.0675 8.16979 11.8301C7.9324 11.5927 7.74525 11.3099 7.61951 10.9986C7.49377 10.6873 7.43202 10.3539 7.43795 10.0182C7.44387 9.68252 7.51734 9.35148 7.65398 9.04481C7.79062 8.73815 7.98763 8.46215 8.23325 8.23327" stroke="#121417" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M0.833252 0.833374L19.1666 19.1667" stroke="#121417" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_621">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </label>
                    </div>
                </form>
                <button form="form" className={module.btn}>Sign Up</button>
            </div>
        </div >
    )
}

export default Register