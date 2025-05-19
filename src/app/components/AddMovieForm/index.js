import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !rating) {
            alert("Du måste fylla i alla fält!");
            return;
        }

        addMovie({ title, rating });

        setTitle("");
        setRating("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>Lägg till en film</fieldset>

            <label htmlFor="title">Title:</label>
            <input
                className="form-control"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="rating">Rating:</label>
            <select className="form-control" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="" disabled>Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <input type="submit" value="Spara film" className="btn btn-success mt-3" />
        </form>
    );
};

export default AddMovieForm;