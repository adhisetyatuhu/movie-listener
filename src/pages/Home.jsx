import Card from "../components/Card";
import CardBanner from "../components/CardBanner";

const Billboard = () => {
    return (
        <>
            <div className="relative">
                <figure className="h-[28rem] bg-[#777]"></figure>
                <div className="absolute p-8 text-white max-w-2xl bottom-0 bg-gradient-to-r from-black/40 to-black/0">
                    <h2 className="text-3xl">Some Title</h2>
                    <p className="my-2">A description. It can be very very long description, anything will do. This is also a description. We will test how long it can hold.</p>
                    <button className="py-2 px-4 my-2 border bg-black/10 rounded-lg hover:bg-white/30 active:bg-black/10">More Info</button>
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
            <div className="py-3"><Billboard /></div>
            <div className="flex gap-2 overflow-scroll hide-scrollbar">
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