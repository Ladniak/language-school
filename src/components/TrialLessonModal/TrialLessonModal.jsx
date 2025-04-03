import module from "./TrialLessonModal.module.css"

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    reason: yup.string().required("Please select a reason."),
    name: yup.string().required("Full name is required."),
    email: yup.string().email("Invalid email address").required("Email is required."),
    number: yup.string().required("Phone number is required."),
});


const TrialLessonModal = ({ onClose, name, avatar, surname }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleEscape = event => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        onClose();
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
                <div className={module.headerInfo}>
                    <h1 className={module.header}>Book trial lesson</h1>
                    <p className={module.headerPar}>
                        Our experienced tutor will assess your current language level,
                        discuss your learning goals, and tailor the lesson to your specific needs.
                    </p>
                </div>
                <div className={module.teacherInfo}>
                    <img src={avatar} alt={name} className={module.avatar} />
                    <div>
                        <p className={module.par}>Your teacher</p>
                        <h3 className={module.teacherName}>{name} {surname}</h3>
                    </div>
                </div>
                <h3 className={module.questPar}>What is your main reason for learning English?</h3>
                <form id="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className={module.radioChoose}>
                        <label className={module.inputLabel}>
                            <input type="radio" value="carrer" {...register("reason")} />
                            Career and business
                        </label>
                        <label className={module.inputLabel}>
                            <input type="radio" value="kids" {...register("reason")} />
                            Lesson for kids
                        </label>
                        <label className={module.inputLabel}>
                            <input type="radio" value="abroad" {...register("reason")} />
                            Living abroad
                        </label>
                        <label className={module.inputLabel}>
                            <input type="radio" value="studing" {...register("reason")} />
                            Exams and coursework
                        </label>
                        <label className={module.inputLabel}>
                            <input type="radio" value="journey" {...register("reason")} />
                            Culture, travel or hobby
                        </label>
                        {errors.reason && <p className={module.error}>{errors.reason.message}</p>}
                    </div>
                    <div className={module.inputsDiv}>
                        <div className={module.errorDiv1}>
                            <input type="text" placeholder="Full Name" {...register('name')} className={module.inputFn} required />
                            {errors.name && <p className={module.error}>{errors.name.message}</p>}
                        </div>
                        <div className={module.errorDiv1}>
                            <input type="text" placeholder="Email" {...register('email')} className={module.inputFn} required />
                            {errors.email && <p className={module.error}>{errors.email.message}</p>}
                        </div>
                        <div className={module.errorDiv1}>
                            <input type="text" placeholder="Phone number" {...register('number')} className={module.inputFn} required />
                            {errors.number && <p className={module.error}>{errors.number.message}</p>}
                        </div>
                    </div>
                </form>
                <button form="form" className={module.btn}>Book</button>
            </div>
        </div>
    )
}

export default TrialLessonModal