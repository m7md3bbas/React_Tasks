class MovieModel {
    constructor(id, title, overview, poster_path, release_date, vote_average) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
        this.release_date = release_date
    }
}


export default MovieModel