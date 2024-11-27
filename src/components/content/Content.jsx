const Banner = (props) => {
    const bannerStyle = {
        position: "absolute",
        backgroundColor: "red",
        color: "white",
        borderRadius: "0.5rem 0 0 0",
        fontSize: "0.75em",
        padding: "0 0.5em",
        top: "0"
    }
    return (
        <>
            <span style={bannerStyle}>{props.text}</span>
        </>
    );
}

const Card = (props) => {
    const cardStyle = {
        position: "relative",
        height: "10rem",
        width: "8rem",
        overflow: "hidden"
    }
    
    const figureStyle = {
        height: "10rem",
        borderRadius: "0.5rem",
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
        width: "8rem",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "0 0 0.5rem 0.5rem"
    }

    return (
        <>
            <div className={props.classes} style={{ height: "12rem"}}>
                <div style={cardStyle}>
                    <Banner text="New" />
                    <figure style={figureStyle}></figure>
                    <figcaption style={figcaptionStyle}>Title yang Panjang Apakah yang Terjadi?</figcaption>
                </div>
            </div>
        </>
    );
}

const Content = () => {
    return (
        <>
            <div className="d-flex gap-2">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default Content;