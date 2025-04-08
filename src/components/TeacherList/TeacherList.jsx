import { useState } from "react";

import module from "./TeacherList.module.css";

import TeacherCard from "../TeacherCard/TeacherCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const TeacherList = ({ teachers }) => {
    const [loadedTeachers, setLoadedTeachers] = useState(4);

    const loadMoreTeachers = () => {
        setLoadedTeachers((prev) => prev + 4);
    };

    return (
        <div>
            <ul className={module.container}>
                {teachers?.slice(0, loadedTeachers).map((teacher) => (
                    <li key={teacher.id}>
                        <TeacherCard teacher={teacher} />
                    </li>
                ))}
            </ul>
            {teachers?.length > loadedTeachers && (
                <LoadMoreBtn onClick={loadMoreTeachers} />
            )}
        </div>
    );
};

export default TeacherList;

