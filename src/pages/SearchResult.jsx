import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import tmdb from "../utils/axios";

const SearchResult = () => {
    const params = useParams();
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const searchMovies = async () => {
        setQuery(params.keyword);
        try {
            setIsLoading(true);
            const { data } = await tmdb.get(`/search/movie?query=${params.keyword}`);
            setMovies(data?.results);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        searchMovies();
    }, []);

    useEffect(() => {
        searchMovies();
    }, [params.keyword])

    return (
        <>
            <h2 className="text-white text-3xl mt-12">Search "{params.keyword}"</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 py-4">
                {/* { isLoading ? <h1>Loading</h1> : movies.map(movie => {
                    return <Card key={movie.id} data={movie} />
                }) } */}

                { movies.map(movie => {
                    return <Card key={movie.id} data={movie} />
                }) }
            </div>
        </>
    );
}

export default SearchResult;