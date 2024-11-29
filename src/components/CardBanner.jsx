const CardBanner = (props) => {
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

export default CardBanner;