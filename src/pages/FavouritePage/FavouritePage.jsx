import module from "./FavouritePage.module.css"

import { useSelector } from "react-redux"

import TeacherList from "../../components/TeacherList/TeacherList"

import { selectFavouriteTeachers } from "../../redux/teachers/selectors"

const FavouritePage = () => {
    const teachers = useSelector(selectFavouriteTeachers)

    return (
        <div className={module.container}>
            {teachers.length > 0 ? (
                <TeacherList teachers={teachers} />
            ) : (
                'Not Favourites yet'
            )}
        </div>
    )
}

export default FavouritePage