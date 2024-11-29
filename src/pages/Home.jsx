import Card from "../components/Card";
import CardBanner from "../components/CardBanner";

const Billboard = () => {
    const figureStyle = {
        height: "25rem",
        backgroundColor: "#777"
    }

    const titleContainerStyle = {
        padding: "2em",
        background: "linear-gradient(20deg, rgba(0,0,0,0.4), rgba(0,0,0,0), rgba(0,0,0,0)), linear-gradient(80deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0))",
        color: "white",
        bottom: "0",
        maxWidth: "40em"
    }

    return (
        <>
            <div className="position-relative">
                <figure style={figureStyle}></figure>
                <div className="position-absolute" style={titleContainerStyle}>
                    <h2>Some Title</h2>
                    <p>A description. It can be very very long description, anything will do. This is also a description. We will test how long it can hold.</p>
                    <button className="btn btn-outline-light">More Info</button>
                </div>
            </div>
        </>
    );
}

const Home = () => {
    const size = 15;
    // height and width ratio = 10:8
    const height = `${size}rem`;
    const width = `${size * 0.8}rem`;
    const containerHeight = `${size + 2}rem`;
    const borderRadius = "0.5rem";

    return (
        <>
            <div><Billboard /></div>
            <div className="d-flex gap-2 overflow-scroll hide-scrollbar">
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}>
                    <CardBanner text="New" borderRadius={borderRadius} />
                </Card>
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}>
                    <CardBanner text="New" borderRadius={borderRadius} />
                </Card>
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
                <Card text="Title yang Panjang Apakah yang Terjadi?" height={height} width={width} containerHeight={containerHeight} borderRadius={borderRadius}></Card>
            </div>
        </>
    );
}

export default Home;