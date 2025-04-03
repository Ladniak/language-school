import module from "./TeacherList.module.css"

import TeacherCard from "../TeacherCard/TeacherCard"

const TeacherList = ({ teachers }) => {

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