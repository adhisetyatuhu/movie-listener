import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardBanner from "../components/CardBanner";
import tmdb from "../utils/axios";

const Billboard = (props) => {
    const imgUrl = `https://image.tmdb.org/t/p/original${props.data?.backdrop_path}`;
    return (
        <>
            <div className="relative">
                <figure className="h-[28rem] overflow-hidden">
                    <img className="object-cover h-[28rem] lg:h-fit lg:w-full" src={ imgUrl } />
                </figure>
                <div className="absolute p-8 text-white max-w-4xl bottom-0 bg-gradient-to-r from-black/60 to-black/0">
                    <h2 className="text-3xl drop-shadow shadow-black" style={{textShadow : "0 0 1px #000000"}}>{ props.data?.title }</h2>
                    <p className="my-2 hidden sm:block" style={{textShadow : "0 0 2px #000000"}}>{ props.data?.overview }</p>
                    <button className="py-1 md:py-2 px-4 my-8 md:my-2 border bg-black/10 rounded-lg hover:bg-white/30 active:bg-black/10">More Info</button>
                </div>
            </div>
        </>
    );
}

const Home = () => {
    const [billboardData, setBillboardData] = useState(null);
    const [movies, setMovies] = useState([]);
    
    const fetchMovies = async () => {
        try {
            const { data } = await tmdb.get('/discover/movie');
            const randomNum = Math.floor(Math.random() * 20);
            setMovies(data?.results);
            setBillboardData(movies[randomNum]);
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const size = 15;
    // height and width ratio = 10:8
    const height = `${size}rem`;
    const width = `${size * 0.8}rem`;
    const containerHeight = `${size + 2}rem`;
    const borderRadius = "0.5rem";

    return (
        <>
            <div className="py-3"><Billboard data={billboardData} /></div>
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