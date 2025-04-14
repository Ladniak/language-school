import module from "./FavouritePage.module.css"

import { useSelector } from "react-redux"

import TeacherList from "../../components/TeacherList/TeacherList"

import { BeatLoader } from "react-spinners"

import { isLoading, selectFavouriteTeachers } from "../../redux/teachers/selectors"
import { selectUserName } from "../../redux/auth/selectors";

const FavouritePage = () => {
    const loading = useSelector(isLoading);
    const login = useSelector(selectUserName);
    const arrOfTeachers = useSelector(selectFavouriteTeachers);
    let teachers;

    if (login != null) {
        teachers = arrOfTeachers;
    } else {
        teachers = [];
    }

    return (
        <>
            {loading ? (
                <div className={module.container}>
                    <BeatLoader />
                </div>
            ) : (
                <div className={module.container}>
                    {teachers.length > 0 ? (
                        <TeacherList teachers={teachers} />
                    ) : (
                        <h1 className={module.header}>Not Favourites <span className={module.headerSpan}>yet</span>!</h1>
                    )}
                </div>
            )}
        </>

    )
}

export default FavouritePage