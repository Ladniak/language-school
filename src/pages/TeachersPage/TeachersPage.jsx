import module from "./TeachersPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isLoading } from "../../redux/teachers/selectors";
import { getTeachers } from "../../redux/teachers/operations";

import TeacherList from "../../components/TeacherList/TeacherList";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { BeatLoader } from "react-spinners";

const TeachersPage = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);

    const [teachers, setTeachers] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const LIMIT = 4;

    useEffect(() => {
        return () => {
            setTeachers([]);
            setStartIndex(0);
        };
    }, []);

    useEffect(() => {
        if (teachers.length === 0) {
            loadMore();
        }
    }, []);


    const loadMore = async () => {
        const action = await dispatch(getTeachers({ startIndex, limit: LIMIT }));
        if (getTeachers.fulfilled.match(action)) {
            setTeachers((prev) => {
                const existingIds = new Set(prev.map((teacher) => teacher.id));
                const newTeachers = action.payload.filter((t) => !existingIds.has(t.id));
                return [...prev, ...newTeachers];
            });
            setStartIndex((prev) => prev + LIMIT);
        }
    };


    return (
        <div className={module.container}>
            {loading && teachers.length === 0 ? (
                <BeatLoader />
            ) : (
                <>
                    <FilterMenu />
                    <TeacherList teachers={teachers} onLoadMore={loadMore} hasMore={teachers.length % LIMIT === 0} />
                </>
            )}
        </div>
    );
};

export default TeachersPage;
