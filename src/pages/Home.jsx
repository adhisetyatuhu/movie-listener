import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardBanner from "../components/CardBanner";
import tmdb from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Billboard = (props) => {
    const navigate = useNavigate();
    const imgUrl = `https://image.tmdb.org/t/p/original${props.data?.backdrop_path}`;
    return (
        <>
            <div className="relative">
                <figure className="h-[28rem] overflow-hidden">
                    <img className="object-cover h-[28rem] lg:h-fit lg:w-full" src={ imgUrl } />
                </figure>
                <div className="absolute p-8 text-white max-w-xl lg:max-w-3xl bottom-0 bg-gradient-to-r from-black/60 to-black/0">
                    <h2 className="text-3xl drop-shadow shadow-black" style={{textShadow : "0 0 1px #000000"}}>{ props.data?.title }</h2>
                    <p className="my-2 line-clamp-2 md:line-clamp-3" style={{textShadow : "0 0 2px #000000"}}>{ props.data?.overview }</p>
                    <button onClick={() => { navigate(`/detail/${props.data?.id}`) }} className="py-1 md:py-2 px-4 my-2 border bg-black/10 rounded-lg hover:bg-white/30 active:bg-black/10">More Info</button>
                </div>
            </div>
        </>
    );
}

const LoadingBillboard = () => {
    return (
        <>
            <div className="relative animate-pulse">
                <div className="h-[28rem] flex justify-center items-center bg-slate-300/30">
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
                        return <Card key={movie.id} data={movie} height={height} width={width} />
                    })
                }
            </div>
        </>
    );
}

export default Home;