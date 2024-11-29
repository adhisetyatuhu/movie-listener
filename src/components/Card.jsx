const Card = (props) => {
    const classes = props.classes ? props.classes : "";
    const height = props.height ? props.height : "15rem";
    const width = props.width ? props.width : "12rem";
    const borderRadius = props.borderRadius ? props.borderRadius : "0.5em";
    const containerHeight = props.containerHeight ? props.containerHeight : "17rem";

    const cardStyle = {
        position: "relative",
        height: height,
        width: width,
        overflow: "hidden"
    }
    
    const figureStyle = {
        height: height,
        borderRadius: borderRadius,
        backgroundColor: "#777"
    };

    const figcaptionStyle = {
        position: "absolute",
        bottom: "0",
        color: "white",
        fontSize: "0.75em",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: width,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: `0 0 ${borderRadius} ${borderRadius}`
    }

    const containerStyle = {
        height: containerHeight,
    }

    return (
        <>
            <div className={classes} style={containerStyle}>
                <div style={cardStyle}>
                    {props.children}
                    <figure style={figureStyle}></figure>
                    <figcaption style={figcaptionStyle}>{props.text}</figcaption>
                </div>
            </div>
        </>
    );
}

export default Card;