import module from "./TeachersPage.module.css"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { isLoading, selectTeachers } from "../../redux/teachers/selectors"
import { getTeachers } from "../../redux/teachers/operations"

import TeacherList from "../../components/TeacherList/TeacherList"

const TeachersPage = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(selectTeachers);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(getTeachers());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                <TeacherList teachers={teachers} />
            )}
        </>
    )
}

export default TeachersPage