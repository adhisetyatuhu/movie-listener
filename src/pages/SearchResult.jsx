import { useParams, useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import tmdb from "../utils/axios";

const SearchResult = () => {
    const params = useParams();
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [favs, setFavs] = useOutletContext()
    const [newFavList, setNewFavList] = useState({});

    const handleFavList = () => {
        let currentList = favs;
        let index = currentList.indexOf(newFavList.data);
        if (newFavList.isFavorite && index === -1) {
            currentList.push(newFavList.data);
        } else if (!newFavList.isFavorite && index >= 0) {
            currentList.splice(index, 1);
        }
        setFavs(currentList);
    }

    useEffect(() => {
        handleFavList();
    }, [newFavList])

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
            <div className="flex gap-1 flex-wrap">
                {/* { isLoading ? <h1>Loading</h1> : movies.map(movie => {
                    return <Card key={movie.id} data={movie} />
                }) } */}

                {movies.map(movie => {
                    return <Card key={movie.id} data={movie} sendNewFav={setNewFavList} />
                })}
            </div>
        </>
    );
}

export default SearchResult;