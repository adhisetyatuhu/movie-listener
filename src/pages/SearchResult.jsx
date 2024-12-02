import { useParams } from "react-router-dom";
import Card from "../components/Card";

const SearchResult = () => {
    const params = useParams();
    return (
        <>
            <h2 className="text-white text-3xl mt-12">Search "{params.keyword}"</h2>
            <div className="flex flex-wrap gap-4 py-4">
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
                <Card text="Title yang muncul dari hasil pencarian"></Card>
            </div>

            <h2 className="text-white text-3xl mt-12">You might be interested</h2>
            <div className="flex flex-wrap gap-4 py-4">
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