import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardBanner from "../components/CardBanner";
import tmdb from "../utils/axios";
import { useNavigate, useOutletContext } from "react-router-dom";

const Billboard = (props) => {
    const navigate = useNavigate();
    const imgUrl = `https://image.tmdb.org/t/p/original${props.data?.backdrop_path}`;
    return (
        <>
            <div className="relative">
                <figure className="h-[28rem] overflow-hidden">
                    <img className="object-cover object-center h-[28rem] lg:h-fit lg:w-full" src={ imgUrl } />
                </figure>
                <div className="absolute p-8 text-white max-w-xl lg:max-w-3xl bottom-0 bg-gradient-to-r from-black/60 to-black/0">
                    <h2 className="text-3xl drop-shadow shadow-black" style={{textShadow : "0 0 1px #000000"}}>{ props.data?.title }</h2>
                    <p className="my-2 line-clamp-2 md:line-clamp-3" style={{textShadow : "0 0 2px #000000"}}>{ props.data?.overview }</p>
                    <button onClick={() => { navigate(`/detail/${props.data?.id}`) }} className="py-1 md:py-2 px-4 my-2 mr-4 border bg-black/10 rounded-lg hover:bg-white/30 active:bg-black/10">More Info</button>
                    <button className="group py-1 md:py-2 px-4 my-2 border bg-black/10 rounded-lg hover:bg-white/30 active:bg-black/10">
                        <span className="group flex items-center">
                            <span className="block group-hover:hidden group-active:block">Add to Favorite </span>
                            <span className="hidden group-hover:block group-active:hidden">Remove from Favorite </span>
                            <svg className="inline ml-2 fill-white/90 group-hover:fill-red-100 group-active:fill-red-500" height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                {/* <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}

const LoadingBillboard = () => {
    return (
        <>
            <div className="relative animate-pulse">
                <div className="h-[28rem] flex justify-center items-center bg-slate-300/20">
                    <div className="w-100 h-10 animate-bounce">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

const Home = () => {
    const [randomIdx, setRandomIdx] = useState(0);
    const [billboard, setBillboard] = useState(null);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
        console.log(favs);
        handleFavList();
    }, [newFavList])
    
    const fetchMovies = async () => {
        try {
            setIsLoading(true);
            const { data } = await tmdb.get('/discover/movie');
            setMovies(data?.results);
            const randomNum = Math.floor(Math.random() * 20);
            setRandomIdx(randomNum);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        setBillboard(movies[randomIdx]);
    }, [movies]);

    const size = 15;
    // height and width ratio = 10:8
    const height = `${size}rem`;
    const width = `${size * 0.8}rem`;
    const containerHeight = `${size + 2}rem`;
    const borderRadius = "0.5rem";

    return (
        <>
            <div className="py-3">
                {
                    isLoading ? <LoadingBillboard /> : <Billboard data={billboard} />
                }
            </div>
            <div className="flex gap-2 overflow-scroll hide-scrollbar">
                {
                    movies.map(movie => {
                        return <Card key={movie.id} data={movie} sendNewFav={setNewFavList} height={height} width={width} />
                    })
                }
            </div>
        </>
    );
}

export default Home;