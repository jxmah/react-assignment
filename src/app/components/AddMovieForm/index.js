import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap CSS for styling

const AddMovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState(""); // state to hold the title of the movie
    const [rating, setRating] = useState(""); // state to hold the rating of the movie

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !rating) {
            alert("Du måste fylla i alla fält!"); // alert the user if any field is empty
            return;
        }

        addMovie({ title, rating }); // call the addMovie function passed as a prop with the new movie data

        setTitle(""); // reset the title state
        setRating(""); // reset the rating state
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="h3">Lägg till en film</fieldset>

            <label htmlFor="title">Title:</label>
            <input
                className="form-control mb-3"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="rating">Rating:</label>
            <select className="form-control mb-3" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="" disabled>Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <input type="submit" value="Spara film" className="btn btn-success mb-3" />
        </form>
    );
};

export default AddMovieForm;