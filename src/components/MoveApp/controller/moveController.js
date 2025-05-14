import axios from "axios";
import MovieModel from "../model/movieModel";

class MovieController {
    static async fetchMovies() {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2cba0d4527a2adc931fc85ccbc9cd8f");
            return response.data.results.map((movie) => {
                return new MovieModel(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.poster_path,
                    movie.release_date,
                    movie.vote_average
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export default MovieController