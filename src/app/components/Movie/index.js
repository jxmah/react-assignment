import styles from "./styles.module.css";

const Movie = ({ id, title, rating, onDelete }) => {

    const star = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <img key={i} src="/images/star.png" alt="star" width="20" height="20" />
            );
        }
        return stars;
    };

    return (
        <ul className={styles.movies}>
            <li className={styles.movieItem}>
                {title}
                {star(rating)}
                <button onClick={() => onDelete(id)}>
                    <img src="/images/delete.png" alt="delete" width="20" className={styles.deleteMovieIcon} />
                </button>
            </li>
        </ul>
    );
};

export default Movie;