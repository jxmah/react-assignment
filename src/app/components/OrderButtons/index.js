const SortButton = ({ sortAlpha, sortRating }) => {
    return (
        <div>
            <button onClick={sortAlpha} className="btn btn-primary mt-3 me-3">Alfabetisk ordning</button>
            <button onClick={sortRating} className="btn btn-primary mt-3">Betygsordning</button>
        </div>
    );
};

export default SortButton;