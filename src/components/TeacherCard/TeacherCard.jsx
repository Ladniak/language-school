import module from "./TeacherCard.module.css"

import { useState } from "react"

import TrialLessonModal from "../TrialLessonModal/TrialLessonModal";

const TeacherCard = ({ teacher }) => {
    const [visible, setVisible] = useState(false);
    const [openLessonModal, setOpenLessonModal] = useState(false);

    const onCloseTrialLesson = () => {
        setOpenLessonModal(false)
    }

    const handleChangeReadMore = () => {
        setVisible(!visible);
    }

    return (
        <>
            <div className={module.card}>
                <div className={module.imgDiv}>
                    <img src={teacher.avatar_url} alt={teacher.name} className={module.avatar} />
                </div>
                <div className={module.contentDiv}>
                    <div className={module.infoDiv}>
                        <div className={module.titleDiv}>
                            <p className={module.lang}>Languages</p>
                            <p className={module.title}>{teacher.name} {teacher.surname}</p>
                        </div>
                        <div className={module.detailInfo}>
                            <p className={module.infoPar1}>
                                <span>
                                    <svg className={module.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 4.13333C14.6667 3.3866 14.6667 3.01323 14.5213 2.72801C14.3935 2.47713 14.1895 2.27316 13.9387 2.14532C13.6534 2 13.2801 2 12.5333 2H12.2667C10.7732 2 10.0265 2 9.45603 2.29065C8.95426 2.54631 8.54631 2.95426 8.29065 3.45603C8 4.02646 8 4.77319 8 6.26667V14L8.0667 13.8999C8.5298 13.2053 8.76135 12.858 9.06727 12.6065C9.33809 12.3839 9.65016 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12H12.5333C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5229 14.5213 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.86667V4.13333Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.33331 4.13333C1.33331 3.3866 1.33331 3.01323 1.47864 2.72801C1.60647 2.47713 1.81044 2.27316 2.06133 2.14532C2.34654 2 2.71991 2 3.46665 2H3.73331C5.22679 2 5.97352 2 6.54395 2.29065C7.04572 2.54631 7.45367 2.95426 7.70933 3.45603C7.99998 4.02646 7.99998 4.77319 7.99998 6.26667V14L7.93328 13.8999C7.47018 13.2053 7.23863 12.858 6.93271 12.6065C6.66188 12.3839 6.34982 12.2169 6.01438 12.1151C5.63548 12 5.21805 12 4.3832 12H3.46665C2.71991 12 2.34654 12 2.06133 11.8547C1.81044 11.7268 1.60647 11.5229 1.47864 11.272C1.33331 10.9868 1.33331 10.6134 1.33331 9.86667V4.13333Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span> Lessons online</p>
                            <svg className={module.stick} width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.2" />
                            </svg>
                            <p className={module.infoPar}>Lessons done: {teacher.lessons_done}</p>
                            <svg className={module.stick} width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.2" />
                            </svg>
                            <p className={module.infoPar}>
                                <span>
                                    <svg className={module.star} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z" fill="#FFC531" stroke="#FFC531" strokeWidth="1.2" />
                                    </svg>
                                </span> Rating: {teacher.rating}</p>
                            <svg className={module.stick} width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V16" stroke="#121417" strokeOpacity="0.2" />
                            </svg>
                            <p className={module.infoPar}>Price / 1 hour: <span className={module.price}>{teacher.price_per_hour}$</span></p>
                            <button className={module.heart}>
                                <svg className={module.heartIcon} width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5767 2.99419C22.0233 2.44061 21.3664 2.00147 20.6433 1.70187C19.9202 1.40226 19.1452 1.24805 18.3625 1.24805C17.5798 1.24805 16.8048 1.40226 16.0817 1.70187C15.3586 2.00147 14.7017 2.44061 14.1483 2.99419L13 4.14252L11.8517 2.99419C10.734 1.87652 9.21812 1.24863 7.6375 1.24863C6.05688 1.24863 4.541 1.87652 3.42333 2.99419C2.30567 4.11186 1.67777 5.62774 1.67777 7.20836C1.67777 8.78898 2.30567 10.3049 3.42333 11.4225L4.57167 12.5709L13 20.9992L21.4283 12.5709L22.5767 11.4225C23.1302 10.8692 23.5694 10.2122 23.869 9.48916C24.1686 8.76608 24.3228 7.99105 24.3228 7.20836C24.3228 6.42566 24.1686 5.65064 23.869 4.92756C23.5694 4.20448 23.1302 3.54751 22.5767 2.99419Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={module.descrDiv}>
                        <p className={module.desrcPar}>Speaks: {teacher.languages.map((item, index) => (index === 0 ? <span key={index} className={module.desrcParSpan}>{item}, </span> : <span key={index} className={module.desrcParSpan}>{item} </span>))}</p>
                        <p className={module.desrcPar}>Lesson info: <span className={module.parSpan}>{teacher.lesson_info}</span></p>
                        <p className={module.desrcPar}>Conditions: <span className={module.parSpan}>{teacher.conditions}</span></p>
                    </div>
                    <div className={module.readMoreDiv}>
                        <button className={visible === false ? module.readMoreBtn : module.displayNone} onClick={handleChangeReadMore}>
                            Read more
                        </button>
                        <div className={visible === true ? '' : module.displayNone}>
                            <p className={module.experience}>{teacher.experience}</p>
                            <div className={module.commentDiv}>
                                {teacher.reviews?.map((item, index) => (
                                    <div key={index}>
                                        <div className={module.commentInfoDiv}>
                                            <p className={module.desrcPar}>{item.reviewer_name}</p>
                                            <p className={module.ratingDiv}>
                                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5795 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703Z" fill="#FFC531" stroke="#FFC531" strokeWidth="1.2" />
                                                </svg>
                                                {item.reviewer_rating}
                                            </p>
                                        </div>
                                        <p className={module.parSpan}>{item.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={module.levelsDiv}>
                        {teacher.levels?.map((item, index) => (<p className={index === 0 ? module.firstLevelsPar : module.levelsPar} key={index}>#{item}</p>))}
                    </div>
                    <button onClick={() => setOpenLessonModal(true)} className={module.trialLesson}>Book trial lesson</button>
                </div>
            </div>
            {openLessonModal && <TrialLessonModal avatar={teacher.avatar_url} name={teacher.name} surname={teacher.surname} onClose={onCloseTrialLesson} />}
        </>

    )
}

export default TeacherCard