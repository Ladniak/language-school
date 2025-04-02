import TeacherCard from "../TeacherCard/TeacherCard"

const TeacherList = ({ teachers }) => {
    return (
        <div >
            {teachers?.map((teacher) => (
                <div key={teacher.id}>
                    <TeacherCard name={teacher.name} />
                </div>
            ))}
        </div>
    )
}

export default TeacherList