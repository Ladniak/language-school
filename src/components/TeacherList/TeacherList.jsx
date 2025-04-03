import module from "./TeacherList.module.css"

import { useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/selectors";

import TeacherCard from "../TeacherCard/TeacherCard"

const TeacherList = () => {
    const teachers = useSelector(selectTeachers);

    return (
        <ul className={module.container}>
            {teachers?.map((teacher) => (
                <li key={teacher.id}>
                    <TeacherCard teacher={teacher} />
                </li>
            ))}
        </ul>
    )
}

export default TeacherList