const Banner = (props) => {
    const borderRadius = props.borderRadius;
    const text = props.text;

    const bannerStyle = {
        position: "absolute",
        backgroundColor: "red",
        color: "white",
        borderRadius: `${borderRadius} 0 0 0`,
        fontSize: "0.75em",
        padding: "0 0.5em",
        top: "0"
    }
    return (
        <>
            <span style={bannerStyle}>{text}</span>
        </>
    );
}

const Card = (props) => {
    const classes = props.classes ? props.classes : "";
    const height = props.height ? props.height : "10rem";
    const width = props.width ? props.width : "8rem";
    const borderRadius = props.borderRadius ? props.borderRadius : "0.5em";
    const containerHeight = props.containerHeight;

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
                    <figcaption style={figcaptionStyle}>Title yang Panjang Apakah yang Terjadi?</figcaption>
                </div>
            </div>
        </>
    );
}

const Content = () => {
    const size = 15;
    // height and width ratio = 10:8
    const height = `${size}rem`;
    const width = `${size * 0.8}rem`;
    const containerHeight = `${size + 2}rem`;
    const borderRadius = "0.5rem";

    return (
        <>
            <div className="d-flex gap-2">
                <Card height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
                <Card height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}>
                    <Banner text="New" borderRadius={borderRadius} />
                </Card>
                <Card height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
                <Card height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
            </div>
        </>
    );
}

export default Content;