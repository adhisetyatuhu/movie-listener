import { useNavigate } from "react-router-dom";

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
            <div onClick={() => { handleClick(props.data?.id) } } className={classes} style={{"height": containerHeight}}>
                <div className="relative overflow-hidden rounded-lg" style={{"height": height, "width": width}}>
                    {props.children}
                    <figure className="bg-[#fff] peer" style={{"height": height}}>
                        <img className="hover:opacity-50 hover:cursor-pointer active:opacity-100 duration-100 transition-all" src={posterUrl} />
                    </figure>
                    <figcaption className="absolute duration-100 transition-all peer-hover:bg-black/40 peer-active:bg-black/70 py-2 rounded-b-lg bottom-0 left-1/2 -translate-x-1/2 text-white text-xs text-center bg-black/70 hover:cursor-pointer hover:underline" style={{"width": width}}>
                        {title}<span>{releasedYear ? " ("+releasedYear+")": ""}</span>
                    </figcaption>
                </div>
            </div>
        </>
    );
}

export default Card;