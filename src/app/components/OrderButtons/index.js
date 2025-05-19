const SortButton = ({ onSortAlpha, onSortRating }) => {
    return (
        <div>
            <button onClick={onSortAlpha} className="btn btn-primary mt-3 me-3">Alfabetisk ordning</button>
            <button onClick={onSortRating} className="btn btn-primary mt-3">Betygsordning</button>
        </div>
    );
};

export default SortButton;