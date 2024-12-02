import Search from "./Search";

const Header = () => {
    return (
        <>
            {/* <nav className="row align-items-center my-3"> */}
            <nav className="flex justify-between flex-wrap items-center my-3">
                <div className="w-ful md:w-1/2">
                    <h1 className="text-white">MOVIE LISTENER</h1>
                </div>
                <div className="w-full md:w-1/2">
                    <Search placeholder="Search" iconColor="#fff" borderColor="#ddd" />
                </div>
            </nav>
        </>
    );
}

export default Header;