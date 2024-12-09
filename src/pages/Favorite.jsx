import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Favorite = () => {
    const [favs, setFavs] = useOutletContext();
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
    }, [])

    useEffect(() => {
        handleFavList();
    }, [newFavList], [favs])

    return (
        <>
            <h2 className="text-white text-3xl mt-12">My Favorite Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 py-4">
                {/* { isLoading ? <h1>Loading</h1> : movies.map(movie => {
                    return <Card key={movie.id} data={movie} />
                }) } */}

                { favs?.map(movie => {
                    return <Card key={movie.id} data={movie} isFavorite={true} sendNewFav={setNewFavList} />
                }) }
            </div>
        </>
    );
}

export default Favorite;