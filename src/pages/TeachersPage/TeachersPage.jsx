import module from "./TeachersPage.module.css"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { isLoading, selectTeachers } from "../../redux/teachers/selectors"
import { getTeachers } from "../../redux/teachers/operations"

import TeacherList from "../../components/TeacherList/TeacherList"

import { BeatLoader } from "react-spinners"

const TeachersPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const teachers = useSelector(selectTeachers);

    useEffect(() => {
        dispatch(getTeachers());
    }, [dispatch]);

    return (
        <div className={module.container}>
            {loading ? (
                <BeatLoader />
            ) : (
                <TeacherList teachers={teachers} />
            )}
        </div>
    )
}

export default TeachersPage