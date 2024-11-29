import Card from "../components/Card";

const SearchResult = ({keyword, }) => {
    return (
        <>
            <h2 className="text-light mt-5">Search "{keyword}"</h2>
            <div className="d-flex flex-wrap gap-2">
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
            </div>

            <h2 className="text-light mt-5">You might be interested</h2>
            <div className="d-flex flex-wrap gap-2">
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
            </div>
        </>
    );
}

export default SearchResult;