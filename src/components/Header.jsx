import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* <nav className="row align-items-center my-3"> */}
            <nav className="flex justify-between items-start my-3">
                <div className="w-full md:w-1/2">
                    <h1 onClick={() => { navigate('/') }} className="text-white text-4xl font-bold cursor-pointer mb-4 md:mb-0">MOVIE LISTENER</h1>
                </div>
                <div className="w-auto sm:w-1/2 flex gap-2 justify-end items-center">
                    <span className="hidden w-full md:block">
                        <Search placeholder="Search" iconColor="#fff" borderColor="#ddd" />
                    </span>
                    <span className="w-auto ml-2 p-2 border-2 rounded-full border-white/80 hover:cursor-pointer hover:bg-white/20" title="My Favorite Movies" onClick={() => {navigate('/favorite')}}>
                        <svg className=" fill-white group-hover:fill-red-100 group-active:fill-red-500" height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            {/* <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
                    </span>
                </div>
            </nav>
            <div className="w-full md:hidden">
                <Search placeholder="Search" iconColor="#fff" borderColor="#ddd" />
            </div>
        </>
    );
}

export default Header;