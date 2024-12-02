const Card = (props) => {
    const classes = props.classes ? props.classes : "";
    const height = props.height ? props.height : "15rem";
    const width = props.width ? props.width : "12rem";
    const containerHeight = props.containerHeight ? props.containerHeight : "17rem";

    return (
        <>
            <div className={classes} style={{"height": containerHeight}}>
                <div className="relative overflow-hidden rounded-lg" style={{"height": height, "width": width}}>
                    {props.children}
                    <figure className="bg-[#777]" style={{"height": height}}></figure>
                    <figcaption className="absolute rounded-b-lg bottom-0 left-1/2 -translate-x-1/2 text-white text-xs text-center bg-black/50" style={{"width": width}}>
                        {props.text}
                    </figcaption>
                </div>
            </div>
        </>
    );
}

export default Card;