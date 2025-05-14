import { useEffect, useState } from "react"
import MovieController from "../controller/moveController"
import MovieItem from "./movieItem"
import "bootstrap/dist/css/bootstrap.min.css";
const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        MovieController.fetchMovies()
            .then((movies) => {
                setMovies(movies)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>


    return (
        <div className="row">
            <div className="bg-danger text-center">
                <h2 className="text-white">MoveList</h2>
            </div>
            <div className="d-flex flex-wrap">
                {movies.map((movie) => {
                    return <div className="col-4"><MovieItem key={movie.id} movie={movie} /></div>
                })}

            </div>
        </div>
    )
}




export default MovieList