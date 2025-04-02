import module from "./TeacherList.module.css"

import { useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/selectors";

import TeacherCard from "../TeacherCard/TeacherCard"

const TeacherList = () => {
    const teachers = useSelector(selectTeachers);

    return (
        <div className={module.container}>
            {teachers?.map((teacher) => (
                <div key={teacher.id}>
                    <TeacherCard teacher={teacher} />
                </div>
            ))}
        </div>
    )
}

export default TeacherList