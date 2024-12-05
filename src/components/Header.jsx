import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* <nav className="row align-items-center my-3"> */}
            <nav className="flex justify-between flex-wrap items-center my-3">
                <div className="w-full md:w-1/2">
                    <h1 onClick={() => { navigate('/') }} className="text-white text-4xl font-bold cursor-pointer mb-4 md:mb-0">MOVIE LISTENER</h1>
                </div>
                <div className="w-full md:w-1/2">
                    <Search placeholder="Search" iconColor="#fff" borderColor="#ddd" />
                </div>
            </nav>
        </>
    );
}

export default Header;