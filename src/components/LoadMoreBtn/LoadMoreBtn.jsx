import module from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
    return (
        <button className={module.button} onClick={onClick}>
            Load More
        </button>
    );
};

export default LoadMoreBtn;
