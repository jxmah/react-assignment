import styles from "./styles.module.css";

const Movie = ({ id, title, rating, onDelete }) => {

    const star = (rating) => { // function to create star images based on rating
        const stars = []; // create an array to hold star images
        for (let i = 0; i < rating; i++) { // loop through the rating
            stars.push(
                <img key={i} src="/images/star.png" alt="star" className={styles.deleteMovieIcon} />
            );
        }
        return stars;
    };

    return (
        <ul className={styles.movies}>
            <li className={styles.movieItem}>
                {title}
                <button onClick={() => onDelete(id)}>
                    <img src="/images/delete.png" alt="delete" className={styles.deleteMovieIcon} />
                </button>
                {star(rating)}
            </li>
        </ul>
    );
};

export default Movie;