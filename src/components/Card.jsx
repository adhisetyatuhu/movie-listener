import { useNavigate } from "react-router-dom";

const LoveButton = () => {

    return (
        <>
            <span className="absolute group bg-black/20 text-white rounded-full text-xs p-1.5 m-1 top-0 right-0 z-10 hover:cursor-pointer hover:bg-black/10">
                
                <svg className="fill-white/40 group-hover:fill-red-100 group-active:hover:fill-red-500" height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            </span>
        </>
    );
}

const Card = (props) => {
    const navigate = useNavigate();

    const handleClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    }

    const classes = props.classes ? props.classes : "";
    const height = props.height ? props.height : "15rem";
    const width = props.width ? props.width : "12rem";
    const containerHeight = props.containerHeight ? props.containerHeight : "17rem";
    const title = props.data?.title;
    const releasedYear = props.data?.release_date ? props.data?.release_date.split('-')[0] : null;
    const posterPath = props.data?.poster_path ? props.data?.poster_path : "/vbLxDKfo8fYC8ISKKrJczNbGKLP.jpg";
    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

    return (
        <>
            <div className={classes} style={{"height": containerHeight}}>
                <div className="relative overflow-hidden rounded-lg" style={{"height": height, "width": width}}>
                    {props.children}
                    <LoveButton />
                    <figure onClick={() => { handleClick(props.data?.id) } } className="bg-[#fff] peer" style={{"height": height}}>
                        <img className="hover:opacity-50 hover:cursor-pointer active:opacity-100 duration-100 transition-all" src={posterUrl} />
                    </figure>
                    <figcaption onClick={() => { handleClick(props.data?.id) } } className="absolute duration-100 transition-all peer-hover:bg-black/40 peer-active:bg-black/70 py-2 rounded-b-lg bottom-0 left-1/2 -translate-x-1/2 text-white text-xs text-center bg-black/70 hover:cursor-pointer hover:underline" style={{"width": width}}>
                        {title}<span>{releasedYear ? " ("+releasedYear+")": ""}</span>
                    </figcaption>
                </div>
            </div>
        </>
    );
}

export default Card;