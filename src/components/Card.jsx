const Card = (props) => {
    const classes = props.classes ? props.classes : "";
    const height = props.height ? props.height : "15rem";
    const width = props.width ? props.width : "12rem";
    const containerHeight = props.containerHeight ? props.containerHeight : "17rem";
    const title = props.data?.title;
    const releasedYear = props.data?.release_date.split('-')[0];
    const posterUrl = `https://image.tmdb.org/t/p/w500${props.data?.poster_path}`

    return (
        <>
            <div className={classes} style={{"height": containerHeight}}>
                <div className="relative overflow-hidden rounded-lg" style={{"height": height, "width": width}}>
                    {props.children}
                    <figure className="bg-[#fff]" style={{"height": height}}>
                        <img className="hover:opacity-50 hover:cursor-pointer" src={posterUrl} />
                    </figure>
                    <figcaption className="absolute py-2 rounded-b-lg bottom-0 left-1/2 -translate-x-1/2 text-white text-xs text-center bg-black/70 hover:cursor-pointer hover:underline" style={{"width": width}}>
                        {title}<span>{releasedYear ? " ("+releasedYear+")": ""}</span>
                    </figcaption>
                </div>
            </div>
        </>
    );
}

export default Card;