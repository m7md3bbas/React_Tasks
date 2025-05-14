const MovieItem = ({ movie }) => {
    return (
        <div>
            <img style={{ width: '400px', height: '400px' }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
        </div>
    )
}

export default MovieItem