import module from "./TeacherList.module.css";

import TeacherCard from "../TeacherCard/TeacherCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import { isLoading } from "../../redux/teachers/selectors";
import { useSelector } from "react-redux";

import { BeatLoader } from "react-spinners";

const TeacherList = ({ teachers, onLoadMore, hasMore }) => {
    const loading = useSelector(isLoading);

    return (
        <>
            <ul className={module.container}>
                {teachers.map((teacher) => (
                    <li key={teacher.id}>
                        <TeacherCard teacher={teacher} />
                    </li>
                ))}
            </ul>
            {loading ? <div className={module.loader}><BeatLoader /></div> : hasMore && <LoadMoreBtn onClick={onLoadMore} />}

        </>
    );
};

export default TeacherList;



