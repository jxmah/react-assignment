const Movies = ({ children }) => {
    if (children.length === 0) {
        return (
            <div>
                <h2>Filmer</h2>
                <p>No movies added</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Filmer</h2>
            {children}
        </div>
    );
};


export default Movies;