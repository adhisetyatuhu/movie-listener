import { data, useParams } from "react-router-dom";
import tmdb from "../utils/axios";
import { useEffect, useState } from "react";

const Genre = ({ children }) => {
    return (
        <>
            <button className="py-0.5 px-4 border bg-black/10 rounded-xl hover:bg-white/30 active:bg-black/30">{children}</button>
        </>
    );
}

function Cast({ data }) {
    const profilePath = `https://image.tmdb.org/t/p/original${data.profile_path ? data.profile_path : "/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg"}`
    return (
        <>
            <div className="">
                <div className="relative overflow-hidden rounded-lg w-[12rem] bg-slate-600/30">
                    <figure className="bg-[#fff]/30 peer">
                        <img loading="lazy" className="opacity-80 hover:cursor-pointer hover:opacity-100 duration-100 transition-all" src={profilePath} />
                    </figure>
                    <figcaption className="absolute w-[12rem] bottom-0 left-1/2 -translate-x-1/2 bg-black/70 duration-200 transition-all peer-hover:-bottom-12 peer-hover:opacity-0 peer-active:bg-black/70 py-2 rounded-b-lg text-white text-xs text-center hover:cursor-pointer hover:underline">
                        {data.name}<span className="block">as {data.character}</span>
                    </figcaption>
                </div>
            </div>
        </>
    );
}

const MovieOverview = (props) => {
    const backdrop = { backgroundImage: `url(https://image.tmdb.org/t/p/original${props.data?.backdrop_path})` };
    const posterUrl = `https://image.tmdb.org/t/p/original${props.data?.poster_path}`;
    const [casts, setCasts] = useState([]);
    const params = useParams();

    const fetchCasts = async () => {
        try {
            const { data } = await tmdb.get(`/movie/${params.id}/credits`);
            setCasts(data?.cast);
            // console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCasts();
    }, []);

    useEffect(() => {
        fetchCasts();
    }, [params.id]);

    return (
        <>
            <div className="my-8">
                <div className="relative bg-no-repeat bg-center bg-[length:100%]" style={backdrop}>
                    <div>

                        <figure className="h-[28rem] bg-gradient-to-r from-black/100 via-black/40 to-black/100 flex items-end flex-wrap lg:flex-nowrap">
                            <img loading="eager" className="h-96 my-8 rounded-lg border border-white/40" src={posterUrl} />

                            <div className="my-8 lg:px-8 text-white">
                                <h2 className="text-3xl font-bold mb-2">{props.data?.title}</h2>

                                {/* rating */}
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <p className="ms-2 text-sm font-bold text-white-900">{props.data?.vote_average}</p>
                                    <span className="w-1 h-1 mx-1.5 bg-white rounded-full"></span>
                                    <a href="#" className="text-sm font-medium text-white-900 underline hover:no-underline">{props.data?.vote_count} voters</a>
                                </div>
                                {/* end rating */}

                                <p className="my-6">{props.data?.overview}</p>
                                <div className="flex gap-2">
                                    {props.data?.genres.map(genre => {
                                        return <Genre key={genre.id}>{genre.name}</Genre>
                                    })}
                                </div>
                            </div>

                            <div className="my-8 flex gap-16 ml-auto md:gap-48 lg:gap-0 lg:flex-col">
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold">Status</p>
                                        <p>{props.data?.status}</p>
                                    </div>

                                    <div className="mb-4 line-clamp-6">
                                        <p className="font-bold">Languages</p>
                                        {props.data?.spoken_languages.map((lang, index) => {
                                            return index < 7 && <div key={lang.name} className="flex flex-wrap gap-1"><span>{lang.name}</span></div>
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold">Budget</p>
                                        <p>${props.data?.budget}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Revenue</p>
                                        <p>${props.data?.revenue}</p>
                                    </div>
                                </div>
                            </div>
                        </figure>

                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">Casts</h2>
                <div className="flex gap-2 overflow-scroll hide-scrollbar">
                    {casts?.map((cast, index) => {
                        return index < 15 && cast.profile_path && <Cast key={index} data={cast} />
                    })}
                </div>
            </div>
        </>
    );
}

const Detail = () => {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    const fetchDetail = async () => {
        const { data } = await tmdb.get(`/movie/${params.id}`);
        setMovie(data);
    }

    useEffect(() => {
        fetchDetail();
    }, [])

    return (
        <>
            <MovieOverview data={movie} />
        </>
    );
}

export default Detail;