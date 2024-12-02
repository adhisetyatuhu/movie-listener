const CardBanner = (props) => {
    const text = props.text;

    return (
        <>
            <span className="absolute bg-red-600 text-white rounded-tl-lg text-xs py-1 px-2 top-0">{text}</span>
        </>
    );
}

export default CardBanner;